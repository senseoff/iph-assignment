import React, { ChangeEvent, FC, useState } from "react";
import "./file-uploader.css";
import UploadButton from "../../components/UploadButton/UploadButton";

type TFileUploader = {
  onChange: (file: string) => void;
};

const FileUploader: FC<TFileUploader> = ({ onChange }) => {
  const [file, setFile] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) return setFile(URL.createObjectURL(file));
    setFile(e.target.value);
  };

  const handleFileUpload = () => {
    onChange(file);
  };

  return (
    <div>
      <UploadButton
        onChange={handleFileChange}
        id="files"
        label="Upload from local storage"
        types="video/*"
      />
      <p>Or paste link</p>
      <input
        type="text"
        onChange={handleFileChange}
        placeholder="https://example.com"
      />
      <div className="submit-button-wrapper">
        {file && <p>{file}</p>}
        <button onClick={handleFileUpload} disabled={!file} type="button">
          Upload Video
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
