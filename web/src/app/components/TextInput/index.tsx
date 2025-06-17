import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  className: string;
  placeholder?: string;
  error?: FieldError | undefined;
  required?: boolean; // Corrected 'require' to 'required'
  classNameInput?: string;
  icon?: React.ReactNode;
}

export function TextInput({
  labelName,
  className,
  error,
  icon,
  ...rest
}: TextInputProps) {
  return (
    <div className={className}>
      <Label className="mb-3 text-[#003B73] text-base sm:text-lg md:text-xl font-semibold">
        {labelName}
      </Label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <Input
          className={`w-full border ${
            rest.classNameInput ? rest.classNameInput : "border-blue-500"
          } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out ${
            rest.classNameInput
          } ${
            rest.classNameInput && rest.classNameInput.includes("error")
              ? "border-red-500"
              : "border-blue-500"
          } ${icon ? "pl-10" : ""}`}
          {...rest}
        />
      </div>
      {error && (
        <span className="text-red-500 text-sm text-left w-full">
          {error.message}
        </span>
      )}
    </div>
  );
}
