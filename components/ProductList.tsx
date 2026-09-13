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
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-100 text-left text-sm text-gray-500">
          <th className="w-10 py-3 pl-2">
            <input type="checkbox" className="rounded border-gray-300" />
          </th>
          <th className="py-3 font-medium">
            <div className="flex items-center gap-1">
              Produto <ArrowUpDown size={12} />
            </div>
          </th>
          <th className="py-3 font-medium">
            <div className="flex items-center gap-1">
              Descrição <ArrowUpDown size={12} />
            </div>
          </th>
          <th className="py-3 font-medium">
            <div className="flex items-center gap-1">
              Preço (Kz) <ArrowUpDown size={12} />
            </div>
          </th>
          <th className="py-3 font-medium">
            <div className="flex items-center gap-1">
              Estoque <ArrowUpDown size={12} />
            </div>
          </th>
          <th className="py-3 font-medium">Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="border-b border-gray-50 text-sm">
            <td className="py-4 pl-2">
              <input type="checkbox" className="rounded border-gray-300" />
            </td>
            <td className="py-4 pr-4 font-medium text-gray-900">{product.name}</td>
            <td className="max-w-xs truncate py-4 pr-4 text-gray-500">
              {product.description || "-"}
            </td>
            <td className="py-4 pr-4 font-medium text-gray-900">
              Kz {product.price.toFixed(2)}
            </td>
            <td className="py-4 pr-4 text-gray-700">
              <StockDot stock={product.stock} />
              {product.stock}
            </td>
            <td className="py-4">
              <ProductRowActions product={product} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
