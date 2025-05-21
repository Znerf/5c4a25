import { Node } from "@/types/api/blueprint"

interface NodeButtonProps {
    node: Node
    onClick: (node: Node) => void
}

export const NodeButton = ({node, onClick}: NodeButtonProps) =>{
    return( 
        <button
            id = {node.id}
            className="absolute bg-blue-500 text-white font-bold py-2 px-4 rounded"
            style={{ left: `${node.position.x-300}px`, top: `${node.position.y}px` }}
            onClick={() => onClick(node)}
        >
            {node.data.name}
        </button>
    )
}