import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiCheck, FiFilter, FiSearch, FiX } from "react-icons/fi";
import { EStatus } from "@/app/types/User";
import { ERole } from "@/app/types/User";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStatus: EStatus | "";
  selectedRole: ERole | "";
  searchEmail: string;
  onStatusChange: (status: EStatus) => void;
  onRoleChange: (role: ERole | "") => void;
  onEmailChange: (email: string) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  selectedStatus,
  selectedRole,
  searchEmail,
  onStatusChange,
  onRoleChange,
  onEmailChange,
  onApplyFilters,
  onClearFilters,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-lg mx-4 shadow-2xl transform transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <FiFilter className="text-[#003873]" size={24} />
            <h3 className="text-xl sm:text-2xl font-bold text-[#003873]">
              Filtros
            </h3>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100/80 rounded-full transition-colors"
          >
            <FiX size={24} />
          </Button>
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#003873] transition-colors"
              size={20}
            />
            <Input
              type="text"
              placeholder="Filtrar por e-mail..."
              value={searchEmail}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003873]/20 focus:border-[#003873] transition-all text-base"
            />
          </div>

          <div className="space-y-4">
            <Label className="block text-base font-semibold text-gray-800">
              Filtrar por Status:
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["ACTIVE", "INACTIVE", "BLOCKED"].map((status) => (
                <Label
                  key={status}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all group"
                >
                  <Input
                    type="radio"
                    name="status"
                    value={status}
                    checked={selectedStatus === status}
                    onChange={(e) => onStatusChange(e.target.value as EStatus)}
                    className="form-radio text-[#003873] w-4 h-4"
                  />
                  <span className="text-sm font-medium group-hover:text-[#003873] transition-colors">
                    {status === "ACTIVE"
                      ? "Ativo"
                      : status === "INACTIVE"
                      ? "Inativo"
                      : "Bloqueado"}
                  </span>
                </Label>
              ))}
            </div>

            <Label className="block text-base font-semibold text-gray-800">
              Filtrar por Cargo:
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["ADMIN", "DELIVERY", "COMPANY"].map((role) => (
                <Label
                  key={role}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all group"
                >
                  <Input
                    type="radio"
                    name="role"
                    value={role}
                    checked={selectedRole === role}
                    onChange={(e) => onRoleChange(e.target.value as ERole | "")}
                    className="form-radio text-[#003873] w-4 h-4"
                  />
                  <span className="text-sm font-medium group-hover:text-[#003873] transition-colors">
                    {role === "ADMIN"
                      ? "Administrador"
                      : role === "DELIVERY"
                      ? "Entregador"
                      : "Empresa"}
                  </span>
                </Label>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-100">
            <Button
              onClick={onClearFilters}
              variant="outline"
              className="w-full sm:w-auto px-6 py-2.5 text-gray-700 hover:bg-gray-50/80 transition-all text-sm font-medium rounded-xl"
            >
              Limpar Filtros
            </Button>
            <Button
              onClick={onApplyFilters}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#003873] text-white rounded-xl hover:bg-[#002a5c] transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-lg shadow-[#003873]/20"
            >
              <FiCheck size={18} />
              Aplicar Filtros
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
