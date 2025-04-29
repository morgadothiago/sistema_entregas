import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";

interface TextInputProps  {
  labelName: string;
  className?: string; // Made optional to allow for default styling
  placeholder?: string;
  required?: boolean;
  classNameInput?: string;
  labelColor?: string; // New prop for dynamic label color
  inputBorderColor?: string; // New prop for dynamic input border color
  errors?: FieldError;
  type?: string;

}

export const TextInput: React.FC<TextInputProps> = ({
  labelName,
  className = "", // Default to an empty string if not provided
  classNameInput = "", // Default to an empty string if not provided
  labelColor = "#003B73", // Default label color
  inputBorderColor = "border-blue-500", // Default input border color
  errors,
  ...rest
}: TextInputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label
        className={`mb-2 text-[${labelColor}] text-base sm:text-lg md:text-xl font-semibold`}
      >
        {labelName}
      </Label>
      <Input
        className={`w-full ${inputBorderColor} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${classNameInput}`}
        {...rest}
      />

       
            <span className="text-red-500 text-sm text-left w-full h-[10px]">
              {errors?.message}
            </span>
        
    </div>
  );
};
