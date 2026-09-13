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
    <main className="w-full px-6 py-10">
        <Header />
      <div className="space-y-6 rounded-2xl bg-white p-8 mt-6 border border-gray-200">
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
