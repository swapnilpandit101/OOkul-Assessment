import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }
    console.log("Uploading:", selectedFile);
    // Implement upload logic (e.g., send file to backend)
  };

  return (
    <div
      className="p-4 border-2 border-dashed border-gray-400 rounded-lg text-center"
      onDrop={handleFileDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        id="fileUploader"
        onChange={handleFileChange}
        className="hidden"
      />
      <label htmlFor="fileUploader" className="cursor-pointer">
        <div className="py-6">
          {selectedFile ? (
            <p className="text-green-600">{selectedFile.name}</p>
          ) : (
            <p className="text-gray-500">Drag & drop or click to select a file</p>
          )}
        </div>
      </label>
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
