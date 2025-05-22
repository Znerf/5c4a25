'use client';
import { useGetBlueprintsQuery } from "@/store/service/fetchApi";
import { useEffect, useState } from "react";

import { NodeButton } from "../molecule/nodeButton";

import { Node } from "@/types/api/blueprint";
import { NodeModal } from "../molecule/nodeModel";
import { FieldModal } from "../molecule/FieldModal";


export default function Diagram() {
    const { data, error, isLoading } = useGetBlueprintsQuery("blueprintId");
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);
    const [selectedField, setSelectedField] = useState<string | null>(null);

    const [onField, onFieldSelect] = useState<{ key: string; value: any } | null>(null);

    useEffect(() => {
        if (data) {
            console.log("Data:", data);
        }
        if (error) {
            console.error("Error:", error);
        }
        console.log(selectedField)
    })
    
    const handleNodeClick = (node: Node) => {
        setSelectedNode(node);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blueprint</div>;
    if (!data) return null;

    return (
        <div >
            <div> 
                {data?.nodes.map((node:Node)=>(
                    <NodeButton key= {node.id} node={node} onClick={handleNodeClick}/>
                ))}
            </div>
            <NodeModal 
                node = {selectedNode}
                forms = {data?.forms}
                data={data}
                setSelectedField = {setSelectedField}
                onClose={() => setSelectedNode(null)} 
            />
            <FieldModal
                field={selectedField}
                nodes = {data.nodes}
                forms={data.forms}
                onFieldSelect = {() => onFieldSelect(null)}
                onClose={() => setSelectedField(null)}
            />
        </div>
    );
}