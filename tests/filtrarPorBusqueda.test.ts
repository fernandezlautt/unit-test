import { describe, expect, test } from "@jest/globals";
import { Cliente } from "../src/data/models/cliente";
import { filtroBusquedaCliente } from "../src/utils/clientes/filtroBusquedaCliente";
import { EstadoCliente } from "../src/data/models/estadoCliente";
import { State } from "../src/data/enums/state.enum";

describe("Filtro de clientes por busqueda", () => {
  test("Deberia devolver todos los clientes que coincidan con la busqueda", () => {
    
    const estadoActivo: EstadoCliente = { id: 1, nombre: State.ACTIVO };

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
        nombre: "Cliente11",
        numCliente: 1,
        estadoCliente: estadoActivo,
      };

const busqueda = "Cliente1";

    const clientesAFiltrar = [cliente1, cliente2, cliente3];

    const clientesFiltrados = filtroBusquedaCliente(clientesAFiltrar, busqueda);

    const esperado = [cliente1, cliente3];

    const doArraysIntersect = (c1: Cliente[], c2: Cliente[]) => c1.some((c) => c2.includes(c));

    expect(doArraysIntersect(clientesFiltrados, esperado)).toBe(true);
  });
});
