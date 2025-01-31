"use client"
import React, { useState } from 'react';

interface InputProps {
  label?: string;
  undertext?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;

}

const InputFields: React.FC<InputProps> = ({ label, undertext, type = "text", onChange, value, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      <label className="label ml-1">{label}</label>
      <div className="relative">
        <input
          onChange={onChange}
          value={value}
          type={showPassword ? "text" : type}
          className="border-1 rounded-lg w-[400px] h-[44px] input-fields pl-4"
          style={{
            borderColor: error ? "red" : "rgb(223, 218, 212)",
            outline: "none",
            transition: "border-color 0.2s ease-in-out"
          }}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 show-hide"
          >
            {showPassword ? "非表示" : "表示"}
          </button>
        )}
      </div>
      {undertext && <p className="helper-text mt-1">{undertext}</p>}
    </div>
  );
};

export default InputFields;
