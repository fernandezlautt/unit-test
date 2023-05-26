import { describe, test, expect } from '@jest/globals';
import { CodigoVerificacion } from '../src/CodigoVerificacion';


describe('Codigo verificacion', () => {
    test('Deberia devolver un codigo de verificacion de 6 digitos', () => {
        
        const codigoVerificacion = CodigoVerificacion.generarCodigo().toString();
        expect(codigoVerificacion.length).toBe(6);

    });

});