import { Suspense } from "react";
import Header from "@/components/Header";
import SearchAndFilters from "@/components/SerachAndFIlters";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/api";
import { Product } from "@/services/type";

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

  let products: Product[] = [];
  let total = 0;

  try {
    const result = await getProducts(page, pageSize);
    products = result.products;
    total = result.total;
  } catch (error) {
    console.log(`Erro ao carregar produtos: ${error}`);
  }

  let filtered = products;

  if (searchParams.search)
  {
    const term = searchParams.search.toLowerCase();
    filtered = filtered.filter(
      (p: any) =>
        p.name?.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
    );
  }

  if (searchParams.stock === "in")
    filtered = filtered.filter((p: any) => p.stock > 0);
  else if (searchParams.stock === "out")
    filtered = filtered.filter((p: any) => p.stock === 0);

  const totalPages = Math.max(Math.ceil(total / pageSize), 1);

  return (
    <main className="w-full px-6 py-6">
        <Header />
      <div className="space-y-6 rounded-2xl bg-white/60 py-8 mt-6 border border-gray-200">
        <Suspense fallback={null}>
          <SearchAndFilters />
        </Suspense>
        <div className="overflow-x-auto ">
          <ProductList products={filtered} />
        </div>
        <Suspense fallback={null}>
          <Pagination currentPage={page} totalPages={totalPages} totalItems={total} />
        </Suspense>
      </div>
    </main>
  );
}
