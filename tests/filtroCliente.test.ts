import { describe, test, expect } from '@jest/globals';
import filtroClienteTipo from '../src/filtroClientes';
import { Cliente } from '../src/class/Cliente';
import { TipoCliente } from '../src/class/TipoCliente';

describe('Filtro de clientes por tipo', () => {
    test('Deberia devolver todos clientes tipo 1', () => {
        const tipo1 = new TipoCliente(1, 'Premium');
        const tipo2 = new TipoCliente(2, 'Standard');
        
        const clientes: Array<Cliente> = Array(
            new Cliente('Juan', 20, tipo1),
            new Cliente('Pedro', 30, tipo2),
            new Cliente('Pablo', 40, tipo1)
          );
        const clientesResultado:Array<Cliente> = filtroClienteTipo(clientes, tipo1);
        
        // let flag:boolean = (clientesResultado.length == 0) ? false : true;

        // clientesResultado.forEach(cliente => {
        //   cliente.tipoCliente.id !== tipo1.id ? flag = false : null;  
        // })

        const validacion = clientesResultado.map((cliente) => cliente.tipoCliente.id === tipo1.id)

        const estadoValidacion = clientesResultado.length === validacion.length ? true : false;//Creo que esta forma de validar es mas limpia

        expect(estadoValidacion).toBe(true);
    
    });

});