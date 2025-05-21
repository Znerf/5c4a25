'use client';
import { useGetBlueprintsQuery } from "@/store/service/fetchApi";
import { Node } from "@/types/api/blueprint";
import { useEffect } from "react";
import { NodeButton } from "../molecule/nodeButton";

export default function Diagram() {
    const { data, error, isLoading } = useGetBlueprintsQuery("blueprintId");

    useEffect(() => {
        if (data) {
            console.log("Data:", data);
        }
        if (error) {
            console.error("Error:", error);
        }
    })

    return (
        <div >
            <div> 
                {data?.nodes.map((node:Node)=>(
                    <NodeButton key= {node.id} node={node} />
                ))}
            </div>
        </div>
    );
}