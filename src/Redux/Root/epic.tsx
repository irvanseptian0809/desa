import { combineEpics } from 'redux-observable'

import * as pokemonDetailEpics from '../Epics/pokemonDetail'
import * as pokemonListEpics from '../Epics/pokemonList'
import api from '../../Utils/api'

function rootEpics(action$: any, store: any) {
  const dependencies = {
    api,
  }
  const allEpics = [
    ...Object.values(pokemonDetailEpics),
    ...Object.values(pokemonListEpics),
  ]

  return combineEpics(...allEpics)(action$, store, dependencies)
}

export default rootEpics
