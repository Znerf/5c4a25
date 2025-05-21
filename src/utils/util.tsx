import { Blueprint, Form, Node } from "@/types/api/blueprint";

export const getFormProperties = (
    node: Node,
    data: Blueprint,
    forms: Form[]
) => {
    const matchingForm: Form | undefined = forms.find(form => form.id === node.data.component_id);
    if (!matchingForm?.field_schema?.properties) return [];
    
    const value = Object.entries(matchingForm.field_schema.properties).map(([key]) => (key)); 
    const Knew = Object.fromEntries(value.map(key => [key, '']))

    const queue: string[] = [];
    const visited = new Set<string>();
    
    node.data.prerequisites.forEach(prerequisiteId => {
        visited.add(prerequisiteId);
        queue.push(prerequisiteId);
    });
    
    while (queue.length > 0) {
        const currentId = queue.shift();
        const currentNode = data.nodes.find((node: Node) => node.id === currentId);
        if (currentNode) {
            const currentForm = forms.find((form: Form) => form.id === currentNode.data.component_id);
            
            if (currentForm?.field_schema?.properties) {
                const intersection = Object.keys(currentForm.field_schema.properties).filter(key => 
                    Object.keys(Knew).includes(key)
                );
                
                intersection.forEach(key => {
                    if (Knew[key] === '') {
                        Knew[key] = ": " + currentNode.data.name + " " + key;
                    }
                });
            }
            
            const currentPrerequisites = currentNode.data.prerequisites || [];
            currentPrerequisites.forEach(prerequisiteId => {
                if (!visited.has(prerequisiteId)) {
                    visited.add(prerequisiteId);
                    queue.push(prerequisiteId);
                }
            });
        }
    }
    return Knew;
};
