/*import { 
  Box, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Pencil, 
  Trash2, 
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans p-8">
      <div className="w-full flex justify-between items-center mb-8">
        <div className="flex gap-4 items-center">
          <div className="flex items-center p-3 rounded-lg bg-indigo-300 text-white">
            <Box size={32} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
            <p className="text-sm text-gray-500">
              Gerencie os produtos da sua loja. Aqui você pode visualizar, editar, adicionar ou remover produtos.
            </p>
          </div>
        </div>

        <div>
          <button className="flex justify-center items-center gap-2 px-5 py-2.5 text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 font-medium text-sm transition-colors">
            <Plus size={20} />
            Novo Produto
          </button>
        </div>
      </div>

      <div className="w-full bg-white border border-gray-200 rounded-2xl">
        <div className="flex justify-between items-center p-6 gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 w-full max-w-sm gap-2 bg-white ">
              <Search size={18} className="text-gray-400" />
              <input 
                type="search" 
                placeholder="Buscar por nome, descrição..." 
                className="w-full text-sm outline-none placeholder-gray-400"
              />
            </div>
            
          <div className="relative flex items-center">
            <Filter size={16} className="absolute left-3 text-gray-500 pointer-events-none" />
            
            <select 
              defaultValue=""
              className="pl-9 pr-8 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white appearance-none cursor-pointer"
            >
              <option value="" disabled hidden>Filtros</option>
              <option value="todos">Todos os produtos</option>
              <option value="disponiveis">Disponíveis</option>
              <option value="indisponiveis">Indisponíveis</option>
              <option value="maior-preco">Maior preço</option>
              <option value="menor-preco">Menor preço</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 text-gray-400 pointer-events-none" />
          </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Mostrar</span>  
            <select className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 bg-white focus:outline-none">
               <option value="10">10</option>
               <option value="20">20</option>
            </select>
            <span>por página</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-slate-50 border-y border-gray-100 flex items-center px-6 py-3 text-xs font-semibold text-gray-500">
            <input type="checkbox" className="mr-6 rounded border-gray-300" />
            <div className="w-1/4 flex items-center gap-1">Produto <ChevronsUpDown size={14} /></div>
            <div className="w-1/3 flex items-center gap-1">Descrição <ChevronsUpDown size={14} /></div>
            <div className="w-1/6 flex items-center gap-1">Preço (Kz) <ChevronsUpDown size={14} /></div>
            <div className="w-1/6 flex items-center gap-1">Estoque <ChevronsUpDown size={14} /></div>
            <div className="w-28">Ações</div>
          </div>

          <div className="flex items-center px-6 py-4 border-b border-gray-100 text-sm hover:bg-slate-50/50">
            <input type="checkbox" className="mr-6 rounded border-gray-300" />
            <p className="w-1/4 font-semibold text-gray-900">Notebook UltraBook Pro 14"</p>
            <p className="w-1/3 text-gray-500 truncate pr-4">Notebook leve e potente, ideal para trabalho e estudos...</p>
            <p className="w-1/6 font-semibold text-gray-900">Kz 1.250,00</p>
            <div className="w-1/6 flex items-center gap-2 text-gray-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              25
            </div>
            <div className="w-28 flex justify-center gap-2">
              <button className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                <Eye size={16} />
              </button>
              <button className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                <Pencil size={16} />
              </button>
              <button className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center px-6 py-4 border-b border-gray-100 text-sm hover:bg-slate-50/50">
            <input type="checkbox" className="mr-6 rounded border-gray-300" />
            <p className="w-1/4 font-semibold text-gray-900">Smartphone Galaxy A54</p>
            <p className="w-1/3 text-gray-500 truncate pr-4">Tela AMOLED, 128GB, câmera de alta resolução...</p>
            <p className="w-1/6 font-semibold text-gray-900">Kz 980,00</p>
            <div className="w-1/6 flex items-center gap-2 text-gray-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              40
            </div>
            <div className="w-28 flex justify-center gap-2">
              <button className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                <Eye size={16} />
              </button>
              <button className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                <Pencil size={16} />
              </button>
              <button className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          
          <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-500">
            <p>Total: 6 itens</p>
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-gray-400">
                <ChevronLeft size={16} /> Anterior
              </button>
              <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-medium">1</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100">2</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100">3</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100">4</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100">5</button>
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                Próxima <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

import { Suspense } from "react";
import Header from "@/components/Header";
import SearchAndFilters from "@/components/SerachAndFIlters";
import ProductsTable from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/api";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: {
    page?: string;
    pageSize?: string;
    search?: string;
    stock?: string;
  };
};

export default async function ProdutosPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;

  const { products, total } = await getProducts(page, pageSize);

  let filtered = products;

  if (searchParams.search) {
    const term = searchParams.search.toLowerCase();
    filtered = filtered.filter(
      (p: any) =>
        p.name?.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
    );
  }

  if (searchParams.stock === "in") {
    filtered = filtered.filter((p: any) => p.stock > 0);
  } else if (searchParams.stock === "out") {
    filtered = filtered.filter((p: any) => p.stock === 0);
  }

  const totalPages = Math.max(Math.ceil(total / pageSize), 1);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
        <Header />
        <Suspense fallback={null}>
          <SearchAndFilters />
        </Suspense>
        <div className="overflow-x-auto">
          <ProductsTable products={filtered} />
        </div>
        <Suspense fallback={null}>
          <Pagination currentPage={page} totalPages={totalPages} totalItems={total} />
        </Suspense>
      </div>
    </main>
  );
}
