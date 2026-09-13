export type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  createdBy?: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
};
