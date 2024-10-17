import React, { useRef } from 'react';

const PdfViewer = ({ dbFileUrl, fileUrl, onClose, selectedFile, uploadedFile }) => {
  const pdfRef = useRef(null);

  // Determine if the selected or uploaded file is a PDF
  const isPdf = selectedFile?.name?.endsWith('.pdf') || uploadedFile?.filename?.endsWith('.pdf');
console.log("SelectedFIle -" + selectedFile?.name)
console.log("UploadedFile -" + uploadedFile?.name)

// Determine the file URL
  const displayUrl = fileUrl || dbFileUrl;
  console.log(fileUrl)
  console.log(dbFileUrl)

  return (
    <div style={{ textAlign: 'center' }}>
      {isPdf ? (
        <embed
          ref={pdfRef}
          src={`${displayUrl}`}
          type="application/pdf"
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc', marginBottom: '10px' }}
        />
      ) : (
        <img
          src={displayUrl}
          alt="imag"
          style={{ width: '100%', maxHeight: '600px', objectFit: 'contain' }}
        />
      )}
      <button
        onClick={onClose}
        style={{ marginTop: '10px', padding: '5px 15px', cursor: 'pointer' }}
      >
        Close
      </button>
    </div>
  );
};

export default PdfViewer;
