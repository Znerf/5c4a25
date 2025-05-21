import { FieldModalProps } from "@/types/component/FieldModel";

export const FieldModal = ({ field,nodes, forms,onFieldSelect, onClose }: FieldModalProps) => {
  if (!field) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/2">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-black">Select Field to Map</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
        </div>
        <div className="flex">
          <div className="w-64 rounded-lg  overflow-y-auto">
            <h3 className="text-black">Available Data</h3>
            <div className="max-h-[60vh] overflow-y-auto">
              {nodes.map((node) => {
                const matchingForm = forms.find(form => form.id === node.data.component_id);
                return (
                  <details key={node.id} className="mb-2 group">
                    <summary className="cursor-pointer font-medium text-black rounded-lg px-3 py-1 group-open:bg-gray-300 ">
                      {node.data.name}
                    </summary>
                    <div className="ml-4 mt-2">
                      {matchingForm ? (
                        <div>
                          {matchingForm?.field_schema?.properties ? (
                            Object.entries(matchingForm.field_schema.properties).map(([key, field]) => (
                              <div
                                key={key}
                                className=" p-2 pl-3 rounded mb-1 text-black hover:bg-gray-100 cursor-pointer"
                                onClick={() => onFieldSelect(node.id, key, field)}
                              >
                                {field.title || key}
                              </div>
                            ))
                          ) : (
                            <div className="text-gray-400 text-sm">No fields</div>
                          )}
                        </div>
                      ) : (
                        <div className="text-gray-400 text-sm">No matching form found</div>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
          
        </div>
        <div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              disabled
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 