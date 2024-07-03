import React, { useState, useRef } from 'react';

const Button = ({ children, onClick, disabled, style }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: '8px 16px',
      backgroundColor: disabled ? '#ccc' : '#3490dc',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }}
  >
    {children}
  </button>
);

const Input = (props) => (
  <input
    {...props}
    style={{
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '4px 8px',
      ...props.style
    }}
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    style={{
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '4px 8px',
      width: '100%',
      height: '1000px',
      ...props.style
    }}
  />
);

const PDFEditor = () => {
  const [pdfContent, setPdfContent] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    console.log("File upload triggered");
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("File read complete");
        setPdfContent(e.target.result);
      };
      reader.onerror = (e) => {
        console.error("Error reading file:", e);
      };
      reader.readAsText(file);
    } else {
      console.log("No file selected");
    }
  };

  const handleUploadClick = () => {
    console.log("Upload button clicked");
    fileInputRef.current.click();
  };

  const handleContentChange = (event) => {
    setPdfContent(event.target.value);
  };

  const handleSave = () => {
    console.log("Save button clicked");
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'edited-document.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ maxWidth: '90vw', margin: '0 auto', padding: '16px', border: '1px solid #ccc', borderRadius: '4px'}}>
      {/* <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>PDF编辑器</h1> */}
      <div style={{ marginBottom: '16px' }}>
        <input
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <Button onClick={handleUploadClick}>
          上传PDF
        </Button>
      </div>
      {fileName && <p style={{ marginBottom: '8px' }}>当前文件: {fileName}</p>}
      <Textarea
        value={pdfContent}
        onChange={handleContentChange}
        placeholder="PDF内容将显示在这里..."
        style={{ marginBottom: '16px' }}
      />
      <Button onClick={handleSave} disabled={!pdfContent}>
        保存更改
      </Button>
    </div>
  );
};

export default PDFEditor;