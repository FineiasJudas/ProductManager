import { Package } from "lucide-react";
import NewProductButton from "./NewProductButton";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
          <Package className="text-primary" size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
          <p className="text-sm text-gray-500">
            Gerencie os produtos da sua loja. Aqui você pode visualizar, editar, adicionar ou remover produtos.
          </p>
        </div>
      </div>

      <NewProductButton />
    </div>
  );
}
