import React, { useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { Document, Page } from 'react-pdf';
import { Upload } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFStructureViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfContent, setPdfContent] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      const fileReader = new FileReader();
      fileReader.onload = async function() {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        const contentArray = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          contentArray.push({ page: i, items: content.items });
        }

        setPdfContent(contentArray);
      };
      fileReader.readAsArrayBuffer(file);
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
          <span className="text-gray-500">Choose a PDF file to analyze...</span>
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

      {pdfFile && (
        <div className="w-full max-w-4xl mt-4">
          <h2 className="text-xl font-bold mb-2">PDF Structure:</h2>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <Document file={pdfFile}>
                <Page pageNumber={1} width={300} />
              </Document>
            </div>
            <div className="w-1/2 pl-2 max-h-screen overflow-y-auto">
              {pdfContent.map((page, pageIndex) => (
                <div key={pageIndex} className="mb-4">
                  <h3 className="text-lg font-semibold">Page {page.page}</h3>
                  {page.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm mb-1">
                      {item.str}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFStructureViewer;