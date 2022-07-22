import { HttpClientModule } from "@angular/common/http";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component";
import { MedicoService } from "./medico.service";


describe( 'Medico component', () => {

    let component: MedicoComponent;
    let fixure: ComponentFixture<MedicoComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [ HttpClientModule ]
        });

        fixure = TestBed.createComponent( MedicoComponent );
        component = fixure.componentInstance;

    });

    it( 'Debe crearse el componente', () => {

        expect( component ).toBeTruthy();

    }); 

    it( 'Debe retornar el nombre del médico', () => {

        const nombre = 'Juan';

        const resp = component.saludarMedico( nombre );

        expect( resp ).toContain( nombre );
    }); 

});