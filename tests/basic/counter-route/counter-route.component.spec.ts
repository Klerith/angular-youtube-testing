import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CounterRouteComponent } from '../../../src/app/basic/counter-route/counter-route.component';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;


  test('debe de tener el valor inicial en cero', async() => {
    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.counter ).toBe(0);
  });

  test('debe de tener el valor inicial de 100 en la ruta /counter/100', async() => {

    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return ( param === 'initial' ) ? '100' : undefined;
          }
        } 
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.counter ).toBe(100);
  });

  test('debe de tener el valor inicial de 10 en la ruta /counter/20abc', async() => {

    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return ( param === 'initial' ) ? '20abc' : undefined;
          }
        } 
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.counter ).toBe(10);
  });

});
