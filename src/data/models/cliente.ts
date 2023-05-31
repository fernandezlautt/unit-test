import { TipoCliente } from "./tipoCliente";

export interface Cliente {
    id: number;
    nombre: string;
    edad: number;
    tipoCliente?: TipoCliente;
    numCliente: number;
}