import { Cliente } from "../../data/models/cliente";

export const filtroBusquedaCliente = (
    clientes: Array<Cliente>,
    busqueda: string
  ): Array<Cliente> => {
    const clientesResultado: Array<Cliente> = clientes.filter((cliente) => cliente.nombre.includes(busqueda));

    return clientesResultado;
}