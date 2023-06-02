import { Cliente } from "../../data/models/cliente";
import { TipoCliente } from "../../data/models/tipoCliente";

const filtroClienteTipo = (
  clientes: Array<Cliente>,
  tipo: TipoCliente
): Array<Cliente> => {
  return clientes.filter((c) => c.tipoCliente?.id == tipo.id);
};

export default filtroClienteTipo;
