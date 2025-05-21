export interface Blueprint {
    id: string;
    tenant_id: string;
    name: string;
    description: string;
    category :string;
    nodes :  Node[];
    edges :  Edge[];
    forms :  Form[];
    branches :  Branch[];
    triggers :  Trigger[];
}
export interface Position{
    x: number;
    y: number;
}
export interface Node {
    id : string;
    type : string;
    position : Position;
    data : NodeData;
}

export interface NodeData {
}
export interface Edge {
    id: string;
}
export interface Form {
    id: string;
}
export interface Branch {
    id: string;
}
export interface Trigger {
    id: string;


