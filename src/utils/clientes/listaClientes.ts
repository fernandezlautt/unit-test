import { Cliente } from "../../data/models/cliente";

export const getClientes = (): Cliente[] => {
  return [
    { id: 2, nombre: "Pedro", edad: 30, numCliente: 2 },
    { id: 1, nombre: "Juan", edad: 20, numCliente: 1 },
    { id: 3, nombre: "Pablo", edad: 40, numCliente: 3 },
  ];
};
