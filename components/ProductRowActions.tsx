"use client";

import { useState, useTransition } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Modal from "./Modal";
import ProductForm from "./ProductForm";
import { updateProductAction, deleteProductAction } from "@/app/actions/products";
import { Product } from "@/services/type";

export default function ProductRowActions({ product }: { product: Product }) {
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(() => {
      deleteProductAction(product._id);
      setDeleteOpen(false);
    });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setViewOpen(true)}
        className="rounded-lg bg-primary-light p-2 text-primary hover:bg-primary/20"
      >
        <Eye size={16} />
      </button>
      <button
        onClick={() => setEditOpen(true)}
        className="rounded-lg bg-primary-light p-2 text-primary hover:bg-primary/20"
      >
        <Pencil size={16} />
      </button>
      <button
        onClick={() => setDeleteOpen(true)}
        className="rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100"
      >
        <Trash2 size={16} />
      </button>

      {viewOpen && (
        <Modal title={product.name} onClose={() => setViewOpen(false)}>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">Descrição: </span>
              {product.description || "Sem descrição"}
            </p>
            <p>
              <span className="font-medium">Preço: </span>
              Kz {product.price.toFixed(2)}
            </p>
            <p>
              <span className="font-medium">Estoque: </span>
              {product.stock} unidades
            </p>
          </div>
        </Modal>
      )}

      {editOpen && (
        <Modal title="Editar Produto" onClose={() => setEditOpen(false)}>
          <ProductForm
            action={updateProductAction}
            product={product}
            submitLabel="Salvar Alterações"
            onSuccess={() => setEditOpen(false)}
          />
        </Modal>
      )}

      {deleteOpen && (
        <Modal title="Remover Produto" onClose={() => setDeleteOpen(false)}>
          <p className="text-sm text-gray-600">
            Tem certeza que deseja remover <strong>{product.name}</strong>? Essa ação não pode ser desfeita.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setDeleteOpen(false)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 disabled:opacity-60"
            >
              {isPending ? "Removendo..." : "Remover"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
