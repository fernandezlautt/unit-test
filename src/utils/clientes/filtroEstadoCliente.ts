import { Cliente } from "data/models/cliente";
import { EstadoCliente } from "data/models/estadoCliente";

export const filtroEstadoCliente = (
  clientes: Array<Cliente>,
  estado: EstadoCliente
): Array<Cliente> => {
  return clientes.filter((c) => c.estadoCliente?.id == estado.id);
};
