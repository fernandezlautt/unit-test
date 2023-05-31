import { Cliente } from "../../data/models/cliente";
import {Orden} from "../../data/enums/orden.enum";

const ordenarClientes = (clientes: Array<Cliente>, orden: Orden): Array<Cliente> => {
    return clientes.slice().sort((a, b) => {
        if (orden === Orden.ASC) {
            return a.numCliente - b.numCliente;
        } else {
            return b.numCliente - a.numCliente;
        }
    });
}

export { ordenarClientes }