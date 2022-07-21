import { Jugador } from "./clase";


describe( 'Pruebas de clase ', () => {

    let jugador = new Jugador();

    beforeAll(()=> {
        console.log('beforeAll');

    });
    beforeEach(()=> {
        console.log('beforeEach');
        // jugador.hp = 100;
        jugador = new Jugador();
    });
    afterAll(()=> {
        console.log('afterAll');

    });
    afterEach(()=> {
        console.log('afterEach');
        // jugador.hp = 100;
    });

    it( 'Debe retonar 80 de hp si recibe 20 de daño', () => {

        const resp = jugador.recibeDanio( 20 );
        expect( resp ).toBe( 80 );

    });

    it( 'Debe retonar 50 de hp si recibe 50 de daño', () => {

        const resp = jugador.recibeDanio( 50 );
        expect( resp ).toBe( 50 );

    });

    it( 'Debe retonar 0 de hp si recibe 100 de daño o más', () => {

        const resp = jugador.recibeDanio( 100 );
        expect( resp ).toBe( 0 );

    });

});