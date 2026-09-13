"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
};

export default function Pagination({ currentPage, totalPages, totalItems }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
  }

  const pages = [];
  for (let i = 1; i <= Math.max(totalPages, 1); i++) {
    if (i <= 5) pages.push(i);
  }

  return (
    <div className="flex items-center justify-between pt-4 px-4">
      <p className="text-sm text-gray-500">Total: {totalItems} itens</p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 disabled:opacity-40"
        >
          <ChevronLeft size={14} /> Anterior
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`h-8 w-8 rounded-lg text-sm ${
              page === currentPage
                ? "bg-primary text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 disabled:opacity-40"
        >
          Próxima <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
