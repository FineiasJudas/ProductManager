import { ArrowUpDown } from "lucide-react";
import ProductRowActions from "./ProductRowActions";
import { Product } from "@/services/type";

function StockDot({ stock }: { stock: number }) {
  const color = stock > 0 ? "bg-green-500" : "bg-red-500";
  return <span className={`inline-block h-2 w-2 rounded-full ${color} mr-2`} />;
}

export default function ProductsTable({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
        <p className="text-gray-500">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center border-b border-gray-100 text-left text-sm text-gray-500 pb-3">
        <div className="w-10 pl-2">
          <input type="checkbox" className="rounded border-gray-300" />
        </div>
        <div className="flex-1 flex items-center gap-1 font-medium">
          Produto <ArrowUpDown size={12} />
        </div>
        <div className="flex-1 flex items-center gap-1 font-medium">
          Descrição <ArrowUpDown size={12} />
        </div>
        <div className="w-32 flex items-center gap-1 font-medium">
          Preço (Kz) <ArrowUpDown size={12} />
        </div>
        <div className="w-24 flex items-center gap-1 font-medium">
          Estoque <ArrowUpDown size={12} />
        </div>
        <div className="w-28 font-medium">Ações</div>
      </div>

      {products.map((product) => (
        <div
          key={product._id}
          className="flex items-center border-b border-gray-50 text-sm py-4"
        >
          <div className="w-10 pl-2">
            <input type="checkbox" className="rounded border-gray-300" />
          </div>
          <div className="flex-1 pr-4 font-medium text-gray-900">{product.name}</div>
          <div className="flex-1 pr-4 text-gray-500 truncate">
            {product.description || "-"}
          </div>
          <div className="w-32 font-medium text-gray-900">
            Kz {product.price.toFixed(2)}
          </div>
          <div className="w-24 flex items-center text-gray-700">
            <StockDot stock={product.stock} />
            {product.stock}
          </div>
          <div className="w-28">
            <ProductRowActions product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}
