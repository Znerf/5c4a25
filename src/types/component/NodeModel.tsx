import { Form } from "../api/blueprint";

export interface NodeModalProps {
    node: Node | null ;
    forms: Form[];
    onClose: () => void;
}
