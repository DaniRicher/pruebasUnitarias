


// describe('Pruebas de string');
// it('Debe ser un string');

import { retornaString } from "./string";

describe( 'Pruebas de strings', () => {

    it('Debe regresar un string', () => {

        const resp = retornaString('Daniel');
        expect( typeof resp ).toBe('string')

    });

    it('Debe retornar un saludo con el nombre enviado', () => {

        const nombre = 'Juan';
        const resp = retornaString( nombre );
        expect( resp ).toContain('Saludos ' + nombre )

    });
});