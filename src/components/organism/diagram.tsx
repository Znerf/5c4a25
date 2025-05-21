'use client';
import { useGetBlueprintsQuery } from "@/store/service/fetchApi";
import { useEffect, useState } from "react";

import { NodeButton } from "../molecule/nodeButton";

import { Node } from "@/types/api/blueprint";


export default function Diagram() {
    const { data, error, isLoading } = useGetBlueprintsQuery("blueprintId");

    const [selectedNode, setSelectedNode] = useState<Node | null>(null);


    useEffect(() => {
        if (data) {
            console.log("Data:", data);
        }
        if (error) {
            console.error("Error:", error);
        }
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
        </div>
    );
}