import { MedicoComponent } from '../../intermedio2/medico/medico.component';
import { routes } from './app.routes';


describe ('rutasPrincipales', () => {

    it( 'Debe existir la ruta /medico/:id', () => {

        expect ( routes ).toContain({

            path: 'medico/:id', component: MedicoComponent

        });

    });

});