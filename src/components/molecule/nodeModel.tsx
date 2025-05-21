import { Form } from "@/types/api/blueprint";
import { NodeModalProps } from "@/types/component/NodeModel";
import { useState } from "react";

export const NodeModal = ({ node, forms, data, setSelectedField, onClose}: NodeModalProps) => {
    if (!node) return null;
    const matchingForm: Form | undefined = forms.find(form => form.id === node.data.component_id);
   




    const getFormProperties = () => {
        if (!matchingForm?.field_schema?.properties) return [];
        
        const value= Object.entries(matchingForm.field_schema.properties).map(([key]) => (key)); 
        const Knew = Object.fromEntries(value.map(key => [key, '']))

        const queue: string[] = [];
        const visited = new Set<string>();
        
        node.data.prerequisites.forEach(prereqId => {
            visited.add(prereqId);
            queue.push(prereqId);
        });
        
        while (queue.length > 0) {
            const currentId = queue.shift();
            const currentNode = data.nodes.find(node => node.id === currentId);
            if (currentNode) {
                const currentForm = forms.find(form => form.id === currentNode.data.component_id);
                
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
                
                const currentPrereqs = currentNode.data.prerequisites || [];
                currentPrereqs.forEach(prereqId => {
                    if (!visited.has(prereqId)) {
                        visited.add(prereqId);
                        queue.push(prereqId);
                    }
                });
            }
        }
        return Knew
    };
    const [k, setK] = useState(getFormProperties());
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-3/4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-black">{node.data.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                {matchingForm ? (
                    <div className="space-y-4">
                        <div className="border-b pb-2">
                            <div className="">
                                {Object.entries(matchingForm.field_schema.properties).map(([key, field]) => (
                                    <div key={key} className=" float  px-4 py-2 justify-start bg-gray-200 m-2 w-full text-gray-700 rounded-md hover:bg-gray-300"
                                        onClick={() => k[key] === '' ? setSelectedField(field.title) : null}
                                    >
                                        <div className="font-medium text-black">{field.title || key} {k[key]}  
                                        {k[key] !== '' && ( 
                                            <span className="flex cursor-pointer float-right" onClick={(e) => {e.stopPropagation(); setK({...k, [key]: ''}); }}>✕</span>
                                        )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    ) : (
                        <p className="text-gray-500">No matching form found for this component.</p>
                    )
                }
            </div>
        </div>
    )

}
