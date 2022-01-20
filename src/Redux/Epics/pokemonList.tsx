import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { mergeMap, catchError } from 'rxjs/operators'

import { POKEMON_GET } from '../../Config/enpoints'

import { pokeImage, pokeId, pokeRemoveDash } from '../../Utils/pokemon'
import { getMyPokemons } from '../../Utils/localStorage'

import {
  POKEMON_LIST_FETCH,
  pokemonListFetchSuccess,
  pokemonListFetchFailed,
} from '../Ducks/pokemonList'

export function pokemonListFetchEpic(action$: any, state$: any, { api }: any) {
  return action$.pipe(
    ofType(POKEMON_LIST_FETCH),
    mergeMap(() =>
      api({
        endpoint: POKEMON_GET,
        query: {
          limit: 18,
          offset: Math.round(Math.random() * (((649 - 18) - 1) + 1)),
        }
      }).pipe(
        mergeMap((response: any) => {
          const pokemonList = response.results.map((data: any) => {
            const id = pokeId(data.url)
            return {
              ...data,
              name: pokeRemoveDash(data.name),
              id,
              image: pokeImage(id),
              owned: getMyPokemons().filter((item: any) => item.id === id).length,
            }
          })
          return of(pokemonListFetchSuccess(pokemonList))
        }),
        catchError(() => of(pokemonListFetchFailed('Failed Fetching Data'))),
      )
    ),
  )
}
