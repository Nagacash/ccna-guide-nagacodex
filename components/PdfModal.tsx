import React from 'react';

interface PdfModalProps {
  pdfUrl: string;
  onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ pdfUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-card rounded-lg shadow-xl w-full max-w-3xl h-3/4 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-dark-border">
          <h2 className="text-lg font-bold text-dark-foreground">View PDF</h2>
          <button
            onClick={onClose}
            className="text-dark-muted-foreground hover:text-dark-foreground text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="flex-grow p-4">
          {pdfUrl ? (
            <iframe src={pdfUrl} className="w-full h-full border-none"></iframe>
          ) : (
            <p className="text-dark-muted-foreground text-center">No PDF available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
