import React, { ChangeEvent, FC } from "react";

type TUploadButton = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  types: string;
};

const UploadButton: FC<TUploadButton> = ({ onChange, id, label, types }) => {
  return (
    <>
      <input
        type="file"
        id={id}
        onChange={onChange}
        style={{ display: "none" }}
        accept={types}
      />
      <label className="button" htmlFor={id}>
        {label}
      </label>
    </>
  );
};

export default UploadButton;
