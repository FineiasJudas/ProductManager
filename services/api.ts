import { ProductsResponse } from "@/services/type";
import axios from "axios";
import { headers } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = "6aa55e2a5e3e39b9db0ce4bc"

function normalizeProductsResponse(json: any, page: number, pageSize: number): ProductsResponse {
  let list: any[] = [];

  if (Array.isArray(json)) {
    list = json;
  } else if (Array.isArray(json?.products)) {
    list = json.products;
  } else if (Array.isArray(json?.data)) {
    list = json.data;
  } else if (Array.isArray(json?.items)) {
    list = json.items;
  }

  const total =
    json?.total ?? json?.count ?? json?.totalItems ?? list.length ?? 0;

  return {
    products: list,
    total,
    page: json?.page ?? page,
    pageSize: json?.pageSize ?? pageSize,
  };
}

export async function getProducts(page: number, pageSize: number): Promise<ProductsResponse> {

  try
  {
    const res = await axios.get(`${API_URL}/api/products?user=${userId}&page=${page}&pageSize=${pageSize}`)
    return normalizeProductsResponse(res.data, page, pageSize);
  } catch (error) {
    console.log(`Erro ao pegar produtos: ${error}`)
    return { products: [], total: 0, page, pageSize };
  }

}

export async function getProductById(id: string) {

  try
  {
    const res = await axios.get(`${API_URL}/api/products/by-id?id=${id}&user=${userId}`)
    return res.data
  } catch (error) {
    console.log(`Erro ao pegar produtos por id: ${error}`)
  }
}

export async function createProduct(name: string, price: number, stock: number, description?: string) {

  try
  {
    const res = await axios.post(`${API_URL}/api/products?user=${userId}`, {name, description, price, stock, user: userId}, { headers: { "Content-Type": "application/json" } })
    return res.data
  } catch (error)
  {
    console.log(`Erro ao criar produto: ${error}`)
  }
}

export async function updateProduct(id: string, name: string, description: string, price: number, stock: number) {
  try
  {
    const res = await axios.patch(`${API_URL}/api/products?id=${id}&user=${userId}`, {name, description, price, stock}, { headers: { "Content-Type": "application/json" } })
    return res.data
  } catch (error) {
    console.log(`Erro ao atualizar produto: ${error}`)
  }
}

export async function deleteProduct(id: string) {
  try
  {
    const res = await axios.delete(`${API_URL}/api/products?id=${id}&user=${userId}`)
    return true
  } catch (error) {
    console.log(`Erro ao excluir produto: ${error}`)
    return false
  }
}