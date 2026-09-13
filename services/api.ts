import axios from "axios";
import { headers } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = "6aa55e2a5e3e39b9db0ce4bc"

export async function getProducts(page: number, pageSize: number) {

  try
  {
    const res = await axios.get(`${API_URL}/api/products?user=${userId}&page=${page}&pagesize=${pageSize}`)
    return res.data;
  } catch (error) {
    console.log(`Erro ao pegar produtos: ${error}`)
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
    const res = await axios.post(`${API_URL}/api/product/${userId}`, {name, description, price, stock}, { headers: { "Content-Type": "application/json" } })
    return res.data
  } catch (error)
  {
    console.log(`Erro ao criar produto: ${error}`)
  }
}

export async function updateProduct(id: string, name: string, description: string, price: number, stock: number) {
  try
  {
    const res = await axios.put(`${API_URL}/api/product/${id}?user=${userId}`, {name, description, price, stock}, { headers: { "Content-Type": "application/json" } })
    return res.data
  } catch (error) {
    console.log(`Erro ao atualizar produto: ${error}`)
  }
}

export async function deleteProduct(id: string) {
  try
  {
    const res = await axios.delete(`${API_URL}/api/product/${id}?user=${userId}`)
    return true
  } catch (error) {
    console.log(`Erro ao excluir produto: ${error}`)
    return false
  }
}