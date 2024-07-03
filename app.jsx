import React from 'react';
import SimplePDFViewer from './pdfopen';
import PDFEditor  from './pdfedit';
// import PDFStructureViewer from './pdf/pdfparse'
function App() {    
  return (
    <div className="App">
      {/* <SimplePDFViewer /> */}
      <PDFEditor/>
      {/* <PDFStructureViewer/> */}
    </div>
  );
}

export default App;