import { Form } from "@/types/api/blueprint";
import { NodeModalProps } from "@/types/component/NodeModel";

export const NodeModal = ({ node, forms , onClose}: NodeModalProps) => {
    if (!node) return null;
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
                                    <div className="px-4 py-2 justify-start bg-gray-200 m-2 w-full text-gray-700 rounded-md hover:bg-gray-300">
                                        <p className="font-medium text-black">{field.title || key} </p>
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
