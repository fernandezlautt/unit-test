import { describe, test, expect } from "@jest/globals";
import { getClientes } from "../src/utils/clientes/listaClientes";

describe("Listar Clientes", () => {
  test("Deberia devolver una lista no vacía", () => {
    const clientes = getClientes();
    expect(clientes.length).toBeGreaterThan(0);
  });
});
