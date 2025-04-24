import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  className: string;
  placeholder?: string;
  required?: boolean; // Corrected 'require' to 'required'
  classNameInput?: string;
}

export function TextInput({
  labelName, // Adicionei esta linha
  className,

  ...rest
}: TextInputProps) {
  return (
    <div className={className}>
      <Label className="mb-3 text-[#003B73] text-base sm:text-lg md:text-xl font-semibold">
        {labelName}
      </Label>
      <Input
        className={`w-full border ${
          rest.classNameInput ? rest.classNameInput : "border-blue-500"
        } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out ${
          rest.classNameInput
        } ${
          rest.classNameInput && rest.classNameInput.includes("error")
            ? "border-red-500"
            : "border-blue-500"
        }`}
        {...rest}
      />
    </div>
  );
}
