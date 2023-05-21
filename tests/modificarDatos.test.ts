import { describe, test, expect } from '@jest/globals';
import { Cliente } from '../src/class/Cliente';
import { TipoCliente } from '../src/class/TipoCliente';

describe('Modificar datos de un cliente', () => {
    test('Deberia modificar los datos de un cliente', () => {
        const tipo1 = new TipoCliente(1, 'Premium');
        const tipo2 = new TipoCliente(2, 'Standard');

        const cliente1 = new Cliente('Juan', 20, tipo1);
        cliente1.actualizarDatos({nombre: 'Pedro', age: 30, tipoCliente: tipo2});

        const validacion = cliente1.nome === 'Pedro' && cliente1.age === 30 && cliente1.tipoCliente.id === tipo2.id;

        expect(validacion).toBe(true);
    })
})