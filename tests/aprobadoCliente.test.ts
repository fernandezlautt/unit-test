import { describe, expect, test } from "@jest/globals";
import { State } from "../src/data/enums/state.enum";
import { Cliente } from "../src/data/models/cliente";
import { EstadoCliente } from "../src/data/models/estadoCliente";
import { aprobarCliente } from "../src/utils/clientes/aprobarCliente";
describe("Aprobar cliente", () => {
  test("Deberia devolver un cliente con estado aprobado", () => {
    const estadoInactivo: EstadoCliente = { id: 1, nombre: State.INACTIVO };

    const cliente1: Cliente = {
      id: 1,
      edad: 18,
      nombre: "Cliente1",
      numCliente: 1,
      estadoCliente: estadoInactivo,
    };

    aprobarCliente(cliente1);

    const estaActivo = cliente1.estadoCliente?.nombre == State.ACTIVO;

    expect(estaActivo).toBe(true);
  });
});
