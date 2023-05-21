import { Cliente } from "./Cliente";
import { TipoCliente } from "./TipoCliente";

function filtroClienteTipo(clientes:Array<Cliente>, tipo:TipoCliente): Array<Cliente> {
    let clientesResultado:Array<Cliente> = new Array<Cliente>();
    for(let cliente of clientes){
        if(cliente.tipoCliente.id == tipo.id){
            clientesResultado.push(cliente);
        }
    }
    return clientesResultado;
}

export {filtroClienteTipo};