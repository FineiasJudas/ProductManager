"use client";

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

export default function SearchAndFilters()
{
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 px-6">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
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
              <button className="block w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-50">Todos</button>
              <button className="block w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-50">Em estoque</button>
              <button className="block w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-50">Sem estoque</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Mostrar</span>
        <select defaultValue="10" className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm outline-none">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span>por página</span>
      </div>
    </div>
  );
}