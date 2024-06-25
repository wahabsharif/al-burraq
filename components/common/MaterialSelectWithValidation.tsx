import React from "react";
import { Select, Option } from "@material-tailwind/react";

interface Select {
  value: string;
  text: string;
}
const MaterialSelectWithValidation = ({
  variant,
  color,
  value,
  size,
  label,
  options,
  disabled,
  onChange,
  error,
  errorText,
}: any) => {
  return (
    <div className="w-full">
      <Select
        variant={variant}
        color={color}
        className="bg-darkBg"
        value={value}
        size={size}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option: Select) => {
          return (
            <Option className="" key={option.value} value={option.value}>
              {option.text}
            </Option>
          );
        })}
      </Select>
      {error && <p className="my-2 text-sm text-red-700">{errorText}</p>}
    </div>
  );
};

export default MaterialSelectWithValidation;
