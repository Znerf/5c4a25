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
    id: string;
    component_key: string;
    component_type: string;
    component_id: string;
    name: string;
    prerequisites: string[];
    permitted_roles: string[];
    input_mapping: string[];
    sla_duration: number;
    approval_required: boolean;
    approval_roles: string[];
}
export interface Edge {
    id: string;
}
export interface Form {
    id: string;
    name: string;
    description: string;
    is_reusable: boolean;
    field_schema: FieldSchema;
   
}

export interface FieldSchema {
    type: string;
    properties: Record<string, {
      avantos_type: string;
      title?: string;
      type: string;
      format?: string;
      items?: {
        enum: string[];
        type: string;
      };
      enum?: any[];
      uniqueItems?: boolean;
    }>;
    required: string[];
  }
  
export interface Branch {
    id: string;
}
export interface Trigger {
    id: string;
}


