import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import ProductsTable from "@/components/ProductList";
import SearchAndFilters from "@/components/SerachAndFIlters";
import { getProducts } from "@/services/api";
import { Product } from "@/services/type";

export const dynamic = "force-dynamic";

export default async function ProdutosPage() {
  let products: Product[] = [];

  try {
    const result = await getProducts(1, 100);
    products = result.products;
  } catch (error) {
    //console.log(`Erro ao carregar produtos: ${error}`);
  }

  return (
    <main className="w-full px-6 py-6">
        <Header />
      <div className="space-y-6 rounded-2xl bg-white/60 py-8 mt-6 border border-gray-200">
      <SearchAndFilters />
        <div className="overflow-x-auto">
          <ProductsTable products={products} />
        </div>
        <Pagination currentPage={1} totalPages={4} totalItems={0} />
      </div>
    </main>
  );
}