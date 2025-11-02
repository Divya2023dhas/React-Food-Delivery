import React from "react";

function Location({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Want to know your location?
        </h2>

        <div className="space-y-2">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
          >
            Allow while this time
          </button>
          <button
            onClick={onClose}
            className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600"
          >
            Only this time
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-xl hover:bg-gray-400"
          >
            Never Allow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;
