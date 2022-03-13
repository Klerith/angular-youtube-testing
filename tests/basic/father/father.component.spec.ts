import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { FatherComponent } from '../../../src/app/basic/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComponent, FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect( compiled ).toMatchSnapshot();
  });

  test('debe de establecer el cliente con el nombre indicado', () => {

    component.onSetClient('Pedro');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');
    
    expect( codeDiv?.textContent ).toContain('"name"');
    expect( codeDiv?.textContent ).toContain('"Pedro"');

  });


  test('debe de borrar el cliente si se emite onDeleteClient (hijo)', () =>{

    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query( By.directive(FatherSonComponent) );
    const sonComponent:FatherSonComponent = sonDebugElement.componentInstance;
    // console.log(sonComponent.client);
    
    sonComponent.onDeleteClient.emit();
    expect( component.client ).toBe(undefined);

  });

  test('debe de actualizar el cliente onClientUpdated', () => {

    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query( By.directive(FatherSonComponent) );
    const sonComponent:FatherSonComponent = sonDebugElement.componentInstance;
    // console.log(sonComponent.client);
    
    sonComponent.onClientUpdated.emit({ id: 10, name: 'Pedro' });
    expect( component.client ).toEqual({ id: 10, name: 'Pedro' });


  })
});
