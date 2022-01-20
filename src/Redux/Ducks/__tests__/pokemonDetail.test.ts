import * as ducks from '../pokemonDetail'
import reducer from '../pokemonDetail'

const mockResponseSuccess = {
  name: 'Ivysour',
  nickname: '',
  image: 'https://images.com/image.png',
  owned: 3,
  id: 5,
  moves: [],
  types: [],
  capture_rate: 225,
}

const mockResponseFailed = 'Failed Fetching Data'

describe('Testing Action Ducks pokemonDetail', () => {
  it('When pokemon detail fetch', () => {
    const payload = '1'
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_FETCH,
    }
    expect(ducks.pokemonDetailFetch(payload)).toEqual(expected)
  })

  it('When pokemon detail fetch is success', () => {
    const expected = {
      payload: mockResponseSuccess,
      type: ducks.POKEMON_DETAIL_FETCH_SUCCESS,
    }
    expect(ducks.pokemonDetailFetchSuccess(mockResponseSuccess)).toEqual(expected)
  })

  it('When pokemon detail fetch is failed', () => {
    const expected = {
      payload: mockResponseFailed,
      type: ducks.POKEMON_DETAIL_FETCH_FAILED,
    }
    expect(ducks.pokemonDetailFetchFailed(mockResponseFailed)).toEqual(expected)
  })

  it('When pokemon detail species fetch', () => {
    const payload = '1'
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH,
    }
    expect(ducks.pokemonDetailSpeciesFetch(payload)).toEqual(expected)
  })
  it('When pokemon detail species fetch is success', () => {
    const payload = 255
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH_SUCCESS,
    }
    expect(ducks.pokemonDetailSpeciesFetchSuccess(payload)).toEqual(expected)
  })
  it('When pokemon detail set nickname', () => {
    const payload = 'nickname pokemon'
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_SET_NICKNAME,
    }
    expect(ducks.pokemonDetailSetNickname(payload)).toEqual(expected)
  })
})

describe('Testing reducer pokemonDetail', () => {
  it('Reducer pokemon detail fetch', () => {
    const action = {
      payload: '1',
      type: ducks.POKEMON_DETAIL_FETCH,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: true,
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
  it('Reducer when pokemon detail fetch is success', () => {
    const action = {
      payload: mockResponseSuccess,
      type: ducks.POKEMON_DETAIL_FETCH_SUCCESS,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: false,
      isError: false,
      data: {
        ...ducks.INITIAL_STATE.data,
        ...mockResponseSuccess,
      }
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
  it('Reducer when pokemon detail fetch is failed', () => {
    const action = {
      payload: mockResponseFailed,
      type: ducks.POKEMON_DETAIL_FETCH_FAILED,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: false,
      isError: true,
      errorMessage: mockResponseFailed
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
  
  it('Reducer when pokemon detail species fetch', () => {
    const payload = '1'
    const action = {
      payload,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: true,
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
  it('Reducer when pokemon detail species fetch is success', () => {
    const payload = {
      capture_rate: 255
    }
    const action = {
      payload,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH_SUCCESS,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: false,
      isError: false,
      data: {
        ...ducks.INITIAL_STATE.data,
        capture_rate: payload.capture_rate
      }
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })

  it('Reducer when pokemon detail set nickname', () => {
    const payload = 'Nickname pokemon'
    const action = {
      payload,
      type: ducks.POKEMON_DETAIL_SET_NICKNAME,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      data: {
        ...ducks.INITIAL_STATE.data,
        nickname: payload
      }
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
})