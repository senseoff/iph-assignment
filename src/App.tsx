import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import FileUploader from "./containers/FileUploader/FileUploader";
import Notes from "./containers/Notes/Notes";

function App() {
  const [src, setSrc] = useState("");
  const playerRef = useRef<HTMLVideoElement>(null);

  const handleUploadFile = (fileSrc: string) => {
    setSrc(fileSrc);
  };

  useEffect(() => {
    if (!playerRef.current) return;
    playerRef.current.load();
  }, [src]);

  return (
    <div className="container">
      <div className="sidebar">
        <Notes />
      </div>
      <div className="content">
        <FileUploader onChange={handleUploadFile} />
        {src && (
          <video ref={playerRef} controls width={250}>
            <source src={src} />
          </video>
        )}
      </div>
    </div>
  );
}

export default App;
