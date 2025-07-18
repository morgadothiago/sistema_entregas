import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FieldError } from "react-hook-form"

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string
  className?: string
  placeholder?: string
  error?: FieldError | undefined
  required?: boolean
  classNameInput?: string
  icon?: React.ReactNode
}

export function TextInput({
  labelName,
  className,
  error,
  icon,
  classNameInput,
  ...rest
}: TextInputProps) {
  const inputBaseClasses =
    "w-full p-3 rounded-lg bg-white text-sm border transition-all duration-200"
  const inputFocusClasses =
    "focus:outline-none focus:ring-2 focus:ring-[#5DADE2] focus:border-transparent"

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
          className={`${inputBaseClasses} ${icon ? "pl-10" : ""} ${
            classNameInput || ""
          } ${inputFocusClasses} border-gray-200`}
          {...rest}
        />
      </div>
      {error && (
        <span className="text-red-500 text-sm text-left w-full mt-1">
          {error.message}
        </span>
      )}
    </div>
  )
}
