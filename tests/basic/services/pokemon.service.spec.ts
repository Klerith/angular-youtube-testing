import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test( 'debe de traer información de bulbasaur', (done) => {

    service.getPokemon(1)
      .subscribe( pokemon => {
        // console.log(pokemon);
        expect( pokemon.name ).toBe('bulbasaur');

        done();
      })

  });

});
