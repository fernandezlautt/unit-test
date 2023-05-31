import { Cliente } from "../../data/models/cliente";

export const actualizarDatos = (cliente:Cliente, datosNuevos: Partial<Cliente>): Cliente => {
    // Esto debería acutalizar en la base de datos el registro, según el id del cliente.
    const clienteActualizado: Cliente = {
        ...cliente,
        ...datosNuevos,
    };
    
    return clienteActualizado;
}