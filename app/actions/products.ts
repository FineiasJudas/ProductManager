"use server";

import { revalidatePath } from "next/cache";
import * as api from "@/services/api";
export type FormState = {
  error: string;
} | null;


export async function createProductAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));

  if (!name || name.trim() === "") {
    return { error: "O nome do produto é obrigatório" };
  }

  if (isNaN(price) || price < 0) {
    return { error: "Preço inválido" };
  }

  if (isNaN(stock) || stock < 0) {
    return { error: "Estoque inválido" };
  }

  try {
    await api.createProduct( name, price, stock, description);
  } catch (err: any) {
    console.log(err);
    return { error: "Não foi possível criar o produto, tenta de novo" };
  }

  revalidatePath("/");
  return null;
}

export async function updateProductAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));

  if (!id) {
    return { error: "Produto inválido" };
  }

  if (!name || name.trim() === "") {
    return { error: "O nome do produto é obrigatório" };
  }

  try {
    await api.updateProduct(id, name, description, price, stock );
  } catch (err) {
    console.log(err);
    return { error: "Não foi possível salvar as alterações" };
  }

  revalidatePath("/");
  return null;
}

export async function deleteProductAction(id: string) {
  try {
    await api.deleteProduct(id);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/");
}

