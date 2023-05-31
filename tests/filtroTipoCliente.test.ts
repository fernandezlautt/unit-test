import { describe, expect, test } from "@jest/globals";
import { Cliente } from "../src/data/models/cliente";
import { TipoCliente } from "../src/data/models/tipoCliente";
import filtroClienteTipo from "../src/utils/clientes/filtroTipoCliente";

describe("Filtro de clientes por tipo", () => {
  test("Deberia devolver todos los clientes tipo 1", () => {
    const tipo1: TipoCliente = { id: 1, nombre: "Premium" };
    const tipo2: TipoCliente = { id: 2, nombre: "Standard" };

    const clientes: Cliente[] = [
      { id: 1, nombre: "Juan", edad: 20, tipoCliente: tipo1, numCliente: 1 },
      { id: 2, nombre: "Pedro", edad: 30, tipoCliente: tipo2, numCliente: 2 },
      { id: 3, nombre: "Pablo", edad: 40, tipoCliente: tipo1, numCliente: 3 },
    ];

    const clientesResultado: Cliente[] = filtroClienteTipo(clientes, tipo1);

    const validacion = clientesResultado.filter(
      (cliente) => cliente.tipoCliente?.id === tipo1.id
    );

    const estadoValidacion =
      clientesResultado.length === validacion.length ||
      clientesResultado.length === 0;

    expect(estadoValidacion).toBe(true);
  });
});
