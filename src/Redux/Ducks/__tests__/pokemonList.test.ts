import * as ducks from '../pokemonList'
import reducer from '../pokemonList'

const mockResponseSuccess = [{
  name: 'Ivysour',
  image: 'https://images.com/image.png',
  owned: 3,
  id: 5,
}]

const mockResponseFailed = 'Failed Fetching Data'

describe('Testing Action Ducks pokemonList', () => {
  it('When pokemon list fetch', () => {
    const expected = {
      type: ducks.POKEMON_LIST_FETCH,
    }
    expect(ducks.pokemonListFetch()).toEqual(expected)
  })

  it('When pokemon list fetch is success', () => {
    const expected = {
      payload: mockResponseSuccess,
      type: ducks.POKEMON_LIST_FETCH_SUCCESS,
    }
    expect(ducks.pokemonListFetchSuccess(mockResponseSuccess)).toEqual(expected)
  })

  it('When pokemon list fetch is failed', () => {
    const expected = {
      payload: mockResponseFailed,
      type: ducks.POKEMON_LIST_FETCH_FAILED,
    }
    expect(ducks.pokemonListFetchFailed(mockResponseFailed)).toEqual(expected)
  })
})

describe('Testing reducer pokemon list', () => {
  it('Reducer pokemon detail fetch', () => {
    const action = {
      type: ducks.POKEMON_LIST_FETCH,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: true,
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
  it('Reducer when pokemon list fetch is success', () => {
    const action = {
      payload: mockResponseSuccess,
      type: ducks.POKEMON_LIST_FETCH_SUCCESS,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: false,
      isError: false,
      pokemonList: mockResponseSuccess,
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
  it('Reducer when pokemon list fetch is failed', () => {
    const action = {
      payload: mockResponseFailed,
      type: ducks.POKEMON_LIST_FETCH_FAILED,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: false,
      isError: true,
      errorMessage: mockResponseFailed
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
})