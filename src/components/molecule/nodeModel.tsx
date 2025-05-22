import { Form } from "@/types/api/blueprint";
import { NodeModalProps } from "@/types/component/NodeModel";
import { getFormProperties } from "@/utils/util";
import { useState } from "react";

export const NodeModal = ({ node, forms, data, setSelectedField, onClose}: NodeModalProps) => {
    if (!node) return null;

    // Uses getFormProperties to find and map form fields that are matched on the parent nodes
    const [k, setK] = useState(getFormProperties(node,data,forms));

    // Find the matching form configuration for this node based on component_id
    const matchingForm: Form | undefined = forms.find(form => form.id === node.data.component_id);
    
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
                                        onClick={() =>(k[key] === '') ? setSelectedField(field.title|| '') : null}
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
