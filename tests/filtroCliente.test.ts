import { describe, test, expect } from '@jest/globals';
import { filtroClienteTipo } from '../src/filtroClientes';
import { Cliente } from '../src/Cliente';
import { TipoCliente } from '../src/TipoCliente';

describe('Filtro de clientes por tipo', () => {
    test('Deberia devolver todos clientes tipo 1', () => {
        const tipo1 = new TipoCliente(1, 'Premium');
        const tipo2 = new TipoCliente(2, 'Standard');
        
        let clientes: Array<Cliente> = Array(
            new Cliente('Juan', 20, tipo1),
            new Cliente('Pedro', 30, tipo2),
            new Cliente('Pablo', 40, tipo1)
          );
        const clientesResultado:Array<Cliente> = filtroClienteTipo(clientes, tipo1);
        
        let flag:boolean = (clientesResultado.length == 0) ? false : true;

        for(let cliente of clientesResultado){
            if(cliente.tipoCliente.id != tipo1.id){
                flag = false;
                break;
            }
        }

        expect(flag).toBe(true);
    
    });

});