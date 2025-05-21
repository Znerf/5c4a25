import { NodeModalProps } from "@/types/component/NodeModel";

export const NodeModal = ({ node, onClose }: NodeModalProps) => {
    if (!node) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-black">Title</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
    )

}
