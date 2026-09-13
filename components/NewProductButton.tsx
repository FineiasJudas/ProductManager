"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Modal from "./Modal";
import ProductForm from "./ProductForm";
import { createProductAction } from "@/app/actions/products";

export default function NewProductButton()
{
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
      >
        <Plus size={18} />
        Novo Produto
      </button>

      {open && (
        <Modal title="Novo Produto" onClose={() => setOpen(false)}>
          <ProductForm
            action={createProductAction}
            submitLabel="Criar Produto"
            onSuccess={() => setOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}