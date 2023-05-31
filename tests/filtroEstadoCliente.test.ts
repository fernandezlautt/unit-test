import { describe, expect, test } from "@jest/globals";
import { State } from "../src/data/enums/state.enum";
import { Cliente } from "../src/data/models/cliente";
import { EstadoCliente } from "../src/data/models/estadoCliente";
import { filtroEstadoCliente } from "../src/utils/clientes/filtroEstadoCliente";

describe("Filtro de clientes por estado", () => {
  test("Deberia devolver todos los clientes con estado Activo", () => {
    const estadoActivo: EstadoCliente = { id: 1, nombre: State.ACTIVO };
    const estadoBloqueado: EstadoCliente = { id: 2, nombre: State.BLOQUEADO };

    const cliente1: Cliente = {
      id: 1,
      edad: 18,
      nombre: "Cliente1",
      numCliente: 1,
      estadoCliente: estadoActivo,
    };
    const cliente2: Cliente = {
      id: 2,
      edad: 18,
      nombre: "Cliente2",
      numCliente: 1,
      estadoCliente: estadoActivo,
    };
    const cliente3: Cliente = {
      id: 3,
      edad: 18,
      nombre: "Cliente3",
      numCliente: 1,
      estadoCliente: estadoBloqueado,
    };

    const clientesAFiltrar = [cliente1, cliente2, cliente3];
    const clientesFiltrados = filtroEstadoCliente(
      clientesAFiltrar,
      estadoActivo
    );
    const esperado = [cliente1, cliente2];

    const doArraysIntersect = (c1: Cliente[], c2: Cliente[]) =>
      c1.some((c) => c2.includes(c));

    expect(doArraysIntersect(clientesFiltrados, esperado)).toBe(true);
  });
});
