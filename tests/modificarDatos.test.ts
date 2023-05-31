import { describe, test, expect } from "@jest/globals";
import { Cliente } from "../src/data/models/cliente";
import { TipoCliente } from "../src/data/models/tipoCliente";
import { actualizarDatos } from "../src/utils/clientes/actualizarDatos";

describe("Modificar datos de un cliente", () => {
  test("Deberia modificar los datos de un cliente", () => {
    const tipo1: TipoCliente = { id: 1, nombre: "Premium" };
    const tipo2: TipoCliente = { id: 2, nombre: "Standard" };

    const cliente1: Cliente = {
      id: 1,
      nombre: "Juan",
      edad: 20,
      tipoCliente: tipo1,
      numCliente: 1
    };

    const clienteActualizado = actualizarDatos(cliente1,{
        nombre: 'Pedro',
        edad: 21,
        tipoCliente: tipo2,
        numCliente: 1
    });

    const validacion =
    clienteActualizado.nombre === "Pedro" &&
    clienteActualizado.edad === 21 &&
    clienteActualizado.tipoCliente?.id === tipo2.id &&
    clienteActualizado.numCliente === 1;

    expect(validacion).toBe(true);
  });
});
