import { EstadoCliente } from "data/models/estadoCliente";
import { TipoCliente } from "./tipoCliente";

export interface Cliente {
  id: number;
  nombre: string;
  edad: number;
  tipoCliente?: TipoCliente;
  estadoCliente?: EstadoCliente;
  numCliente: number;
}
