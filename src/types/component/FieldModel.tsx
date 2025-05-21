import { Form, Node } from "../api/blueprint";

export interface FieldModalProps{
    field: string| null
    onClose: () => void;
    forms: Form[];
    nodes: Node[];
    onFieldSelect: (nodeId: string, fieldKey: string, field: any) => void;
}