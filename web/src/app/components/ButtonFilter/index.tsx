// components/ButtonFilter.tsx
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import React from "react";

type ButtonFilterProps = {
  onClick?: () => void;
};

export default function ButtonFilter({ onClick }: ButtonFilterProps) {
  return (
    <Button
      onClick={onClick}
      className="flex items-center  gap-2 bg-[#003873] hover:bg-[#00FFB3] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      type="button"
    >
      <FilterIcon className="w-4 h-4" />
      <span>Filtrar</span>
    </Button>
  );
}
