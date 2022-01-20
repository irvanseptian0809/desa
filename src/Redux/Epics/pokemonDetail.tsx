import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { mergeMap, catchError } from 'rxjs/operators'

import { POKEMON_GET, POKEMON_SPECIES_GET } from '../../Config/enpoints'
import { pokeImage, pokeRemoveDash } from '../../Utils/pokemon'
import { getMyPokemons } from '../../Utils/localStorage'

import {
  POKEMON_DETAIL_FETCH,
  pokemonDetailFetchSuccess,
  pokemonDetailFetchFailed,
  pokemonDetailSpeciesFetch,
  pokemonDetailSpeciesFetchSuccess,
  POKEMON_DETAIL_SPECIES_FETCH
} from '../Ducks/pokemonDetail'

export function pokemonDetailFetchEpic(action$: any, state$: any, { api }: any) {
  return action$.pipe(
    ofType(POKEMON_DETAIL_FETCH),
    mergeMap(({ payload }) =>
      api({
        endpoint: POKEMON_GET,
        params: [payload]
      }).pipe(
        mergeMap((response: any) => {
          const pokemonDetail = {
            name: pokeRemoveDash(response.name),
            image: pokeImage(response.id),
            id: response.id,
            owned: getMyPokemons().filter((item: any) => item.id === response.id).length,
            moves: response.moves,
            types: response.types,
          }
          
          return of(
            pokemonDetailSpeciesFetch(payload),
            pokemonDetailFetchSuccess(pokemonDetail),
          )
        }),
        catchError(() => of(pokemonDetailFetchFailed('Failed Fetching Data'))),
      )
    ),
  )
}

export function pokemonDetailSpeciesFetchEpic(action$: any, state$: any, { api }: any) {
  return action$.pipe(
    ofType(POKEMON_DETAIL_SPECIES_FETCH),
    mergeMap(({ payload }) =>
      api({
        endpoint: POKEMON_SPECIES_GET,
        params: [payload]
      }).pipe(
        mergeMap((response: any) => of(
          pokemonDetailSpeciesFetchSuccess(response),
        )),
        catchError(() => of(pokemonDetailFetchFailed('Failed Fetching Data'))),
      )
    ),
  )
}
