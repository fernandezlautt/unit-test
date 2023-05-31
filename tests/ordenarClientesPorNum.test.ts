import { describe, test, expect } from "@jest/globals";
import { Cliente } from "../src/data/models/cliente";
import { Orden } from "../src/data/enums/orden.enum";
import { ordenarClientes } from "../src/utils/clientes/ordenarClientes";

describe("Ordenar Clientes por número", () => {
  test("Deberia devolver los clientes ordenados ascendentemente ", () => {
    const clientes: Cliente[] = [
      { id: 2, nombre: "Pedro", edad: 30, numCliente: 2 },
      { id: 1, nombre: "Juan", edad: 20, numCliente: 1 },
      { id: 3, nombre: "Pablo", edad: 40, numCliente: 3 },
    ];

    const clientesOrdenadosAsc = ordenarClientes(clientes, Orden.ASC);
    let isOrdenados = false;

    if (
        clientesOrdenadosAsc[0].numCliente < clientesOrdenadosAsc[1].numCliente &&
        clientesOrdenadosAsc[1].numCliente < clientesOrdenadosAsc[2].numCliente
    ) {
      isOrdenados = true;
    }

    expect(isOrdenados).toBe(true);
  });
  
  test("Deberia devolver los clientes ordenados descendentemente ", () => {
    const clientes: Cliente[] = [
      { id: 2, nombre: "Pedro", edad: 30, numCliente: 2 },
      { id: 1, nombre: "Juan", edad: 20, numCliente: 1 },
      { id: 3, nombre: "Pablo", edad: 40, numCliente: 3 },
    ];

    const clientesOrdenadosDesc = ordenarClientes(clientes, Orden.DESC);
    let isOrdenados = false;

    if (
        clientesOrdenadosDesc[0].numCliente > clientesOrdenadosDesc[1].numCliente &&
        clientesOrdenadosDesc[1].numCliente > clientesOrdenadosDesc[2].numCliente
    ) {
      isOrdenados = true;
    }

    expect(isOrdenados).toBe(true);
  });
});
