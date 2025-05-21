import { Form, Node, NodeData } from "../api/blueprint";

export interface NodeModalProps {
    node: Node | null ;
    forms: Form[];
    data: NodeData;
    setSelectedField: (key: string ) => void;
    onClose: () => void;
}
