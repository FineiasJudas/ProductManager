import { Box, Plus, Search } from "lucide-react";

export default function Home()
{
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans px-6 py-6">
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <section className="flex items-center px-4 py-2 rounded-lg bg-fuchsia-800">
            <Box color="white" size={36}/>
          </section>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900">Produtos</h1>
            <h1 className="text-xl  text-gray-600">Gerencie produtos da sua loja. Aqui você pode visualizar, editar, adicionar, e remover produtos. </h1>
          </div>
        </div>

        <div>
          <button className="flex justify-center items-center gap-3 px-6 py-3 text-white rounded-xl bg-fuchsia-800 font-medium">
            <Plus size={28} />
             Novo Produto
          </button>
        </div>
      </div>

      <div className="w-full border border-gray-300 rounded-2xl  mt-10">
          <form action="" className="flex justify-between px-6 py-6">
            <div className="flex gap-3 items-center border border-gray-300 rounded-lg px-2">
              <Search color=""/>
              <input type="search" placeholder="Buscar produtos por nome, descrição..." className=" px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"/>
            </div>
            <select name="filter" id="" value={"Filtros"} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
              <option value="">Todos os produtos</option>
              <option value="disponiveis">Disponíveis</option>
              <option value="indisponiveis">Indisponíveis</option>
            </select>
            <div className="flex items-center gap-5">
              Mostrar  
              <select name="pagination" id="" value={""} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                 <option value="">5</option>
                 <option value="10">10</option>
                 <option value="20">20</option>
              </select>
            </div>
           
          </form>
        </div>

      </div>
  );
}
