"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FormState } from "@/app/actions/products";
import { Product } from "@/services/type";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark disabled:opacity-60"
    >
      {pending ? "Salvando..." : label}
    </button>
  );
}

type Props = {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  product?: Product;
  submitLabel: string;
  onSuccess: () => void;
};

export default function ProductForm({ action, product, submitLabel, onSuccess }: Props) {
  const [state, formAction] = useActionState(action, null);

  if (state === null && typeof window !== "undefined") {
  }

  async function handleAction(formData: FormData) {
    const result = await formAction(formData);
  }

  return (
    <form
      action={async (formData: FormData) => {
        await formAction(formData);
      }}
      onSubmit={() => {
        setTimeout(() => {
          if (!state?.error) onSuccess();
        }, 600);
      }}
      className="space-y-4"
    >
      {product?._id && <input type="hidden" name="id" value={product._id} />}

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Nome</label>
        <input
          name="name"
          defaultValue={product?.name}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
          placeholder="Ex: Notebook UltraBook Pro 14"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Descrição</label>
        <textarea
          name="description"
          defaultValue={product?.description}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
          placeholder="Descrição do produto..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Preço (Kz)</label>
          <input
            name="price"
            type="number"
            step="0.01"
            defaultValue={product?.price}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Estoque</label>
          <input
            name="stock"
            type="number"
            defaultValue={product?.stock}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
            placeholder="0"
          />
        </div>
      </div>

      {state?.error && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onSuccess}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </button>
        <SubmitButton label={submitLabel} />
      </div>
    </form>
  );
}
