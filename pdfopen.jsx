import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

const StyledPDFViewer = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-3xl mb-4">
        <div 
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
          onClick={handleButtonClick}
        >
          <span className="text-gray-500">Choose a PDF file to open...</span>
          <Upload className="w-5 h-5 text-gray-400" />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept=".pdf"
          className="hidden"
        />
      </div>
      {pdfUrl && (
        <div className="w-full max-w-4xl h-screen">
          <object
            data={pdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>It appears you don't have a PDF plugin for this browser. You can <a href={pdfUrl}>click here to download the PDF file.</a></p>
          </object>
        </div>
      )}
    </div>
  );
};

export default StyledPDFViewer;