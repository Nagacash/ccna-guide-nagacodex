import React from 'react';

interface ResourcesModalProps {
  onClose: () => void;
  videoId: string | null;
}

const Resources: React.FC<ResourcesModalProps> = ({ onClose, videoId }) => {
  console.log("Resources: received videoId:", videoId);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-card rounded-lg shadow-xl w-full max-w-4xl h-3/4 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-dark-border">
          <h2 className="text-lg font-bold text-dark-foreground">Additional Resources</h2>
          <button
            onClick={onClose}
            className="text-dark-muted-foreground hover:text-dark-foreground text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="flex-grow p-4 flex items-center justify-center">
          {videoId ? (
            <iframe
              width="560"
              height="315"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <p className="text-dark-muted-foreground">No video available for this resource.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
