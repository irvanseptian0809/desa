import createReducer from '../../Utils/createReducer'

export const POKEMON_LIST_FETCH = 'POKEMON_LIST_FETCH'
export const POKEMON_LIST_FETCH_SUCCESS = 'POKEMON_LIST_FETCH_SUCCESS'
export const POKEMON_LIST_FETCH_FAILED = 'POKEMON_LIST_FETCH_FAILED'

export interface interfacePokemonList {
  name: string,
  id: string,
  image?: string,
  owned: number,
}

export interface interfacePokemon {
  pokemonList: interfacePokemonList[],
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const INITIAL_STATE: interfacePokemon = {
  pokemonList: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
}

const reducer = createReducer(INITIAL_STATE, {
  [POKEMON_LIST_FETCH]: (state: any) => ({
    ...state,
    isLoading: true,
  }),
  [POKEMON_LIST_FETCH_SUCCESS]: (state: any, payload: interfacePokemonList) => ({
    ...state,
    isLoading: false,
    isError: false,
    pokemonList: payload,
  }),
  [POKEMON_LIST_FETCH_FAILED]: (state: any, payload: string) => ({
    ...state,
    isLoading: false,
    isError: true,
    errorMessage: payload,
  })
})

export const pokemonListFetch = () => ({
  type: POKEMON_LIST_FETCH,
})
export const pokemonListFetchSuccess = (payload: any) => ({
  type: POKEMON_LIST_FETCH_SUCCESS,
  payload,
})
export const pokemonListFetchFailed = (payload: string) => ({
  type: POKEMON_LIST_FETCH_FAILED,
  payload,
})

export default reducer
