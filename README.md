# ProductoManager

Teste técnico: tela de gerenciamento de produtos (listar, criar, editar, remover), consumindo a API fornecida.

## Stack

- Next.js (App Router)
- React Server Components + Server Actions
- Tailwind CSS
- Axios

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Variáveis de ambiente

Cria um `.env` na raiz:

```
NEXT_PUBLIC_API_URL="https://backend-nodejs-q65c.onrender.com"
```

## Estrutura

```
app/
  page.tsx            -> tela principal, busca os produtos na API
  actions/products.ts -> Server Actions (criar, editar, remover)
components/
  Header.tsx           -> título + botão "Novo Produto"
  NewProductButton.tsx  -> abre o modal de criação
  SerachAndFIlters.tsx  -> busca, filtro de estoque e itens por página
  ProductList.tsx       -> lista de produtos
  ProductRowActions.tsx -> ver / editar / remover por item
  ProductForm.tsx        -> formulário usado no criar e no editar
  Modal.tsx               -> modal genérico
  Pagination.tsx          -> paginação
services/
  api.ts     -> chamadas pra API (getProducts, createProduct, updateProduct, deleteProduct)
  type.ts    -> tipos
```

## Observações

- A API não tem busca/filtro por nome, então isso é feito em cima dos produtos que já vieram da página atual.
- O `USER_ID` do desafio está fixo em `services/api.ts`.
```