import { Blueprint, Form, Node, NodeData } from "../api/blueprint";

export interface NodeModalProps {
    node: Node | null ;
    forms: Form[];
    data: Blueprint;
    setSelectedField: (key: string ) => void;
    onClose: () => void;
}
