interface FieldModalProps{
    field: string| null
    onClose: () => void;
}

export const FieldModal = ({ field, onClose }: FieldModalProps) => {
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
        </div>
      </div>
    );
  }; 