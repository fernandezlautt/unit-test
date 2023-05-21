import { Cliente } from "./class/Cliente";
import { TipoCliente } from "./class/TipoCliente";

function filtroClienteTipo(clientes:Array<Cliente>, tipo:TipoCliente): Array<Cliente> {
    const clientesResultado:Array<Cliente> = new Array<Cliente>();
    clientes.forEach(cliente => {
        cliente.tipoCliente.id === tipo.id ? clientesResultado.push(cliente) : null;
    })
    return clientesResultado;
}

export {filtroClienteTipo};