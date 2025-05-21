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

export interface Node {
    id: string;
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


