import React from "react";
import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      console.log("Navegando para página anterior:", currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log("Navegando para próxima página:", currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    console.log("Clicando na página:", page);
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const startItem = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  console.log("Estado da paginação:", {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
  });

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
      <div className="text-sm text-gray-500">
        Mostrando {startItem} a {endItem} de {totalItems} itens
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={handlePreviousPage}
          variant="outline"
          size="sm"
          disabled={currentPage <= 1}
          className="flex items-center gap-1"
        >
          <FiChevronLeft className="h-4 w-4" />
          Anterior
        </Button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className={`min-w-[2rem] ${
                currentPage === page
                  ? "bg-[#003873] text-white hover:bg-[#002a5c]"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          onClick={handleNextPage}
          variant="outline"
          size="sm"
          disabled={currentPage >= totalPages}
          className="flex items-center gap-1"
        >
          Próxima
          <FiChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
