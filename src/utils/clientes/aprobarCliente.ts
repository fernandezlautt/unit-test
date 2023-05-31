import { Cliente } from "data/models/cliente";
import { State } from "../../data/enums/state.enum";

export const aprobarCliente = (cliente: Cliente) => {
  cliente.estadoCliente = { id: 2, nombre: State.ACTIVO };
};
