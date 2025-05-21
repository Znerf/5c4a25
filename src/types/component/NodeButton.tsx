import { Node } from "../api/blueprint"

export interface NodeButtonProps {
    node: Node
    onClick: (node: Node) => void
}