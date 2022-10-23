import React, { ChangeEvent, FC } from "react";

type TTimeInput = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
  min?: string;
};

const TimeInput: FC<TTimeInput> = ({ onChange, value, name, label, min }) => {
  return (
    <div>
      <p className="time-input-label">{label}</p>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type="time"
        min={min}
        step={1}
        required
      />
    </div>
  );
};

export default TimeInput;
