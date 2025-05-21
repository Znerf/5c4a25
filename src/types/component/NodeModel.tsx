import { Form } from "../api/blueprint";

export interface NodeModalProps {
    node: Node | null ;
    forms: Form[];
    setSelectedField: (key: string ) => void;
    onClose: () => void;
}
