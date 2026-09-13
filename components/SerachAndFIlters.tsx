"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, Filter, ChevronDown } from "lucide-react";

export default function SearchAndFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  }

  function handleSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      updateParam("search", search);
    }
  }

  function handlePageSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateParam("pageSize", e.target.value);
  }

  function handleStockFilter(value: string) {
    updateParam("stock", value);
    setShowFilters(false);
  }

  const pageSize = searchParams.get("pageSize") ?? "10";

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            onBlur={() => updateParam("search", search)}
            placeholder="Buscar por nome, descrição..."
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Filter size={15} />
            Filtros
            <ChevronDown size={15} />
          </button>

          {showFilters && (
            <div className="absolute left-0 top-11 z-10 w-44 rounded-lg border border-gray-200 bg-white p-2 shadow-md">
              <button
                onClick={() => handleStockFilter("")}
                className="block w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-50"
              >
                Todos
              </button>
              <button
                onClick={() => handleStockFilter("in")}
                className="block w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-50"
              >
                Em estoque
              </button>
              <button
                onClick={() => handleStockFilter("out")}
                className="block w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-50"
              >
                Sem estoque
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Mostrar</span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm outline-none"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span>por página</span>
      </div>
    </div>
  );
}
