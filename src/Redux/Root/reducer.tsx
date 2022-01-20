import { combineReducers } from 'redux'
import pokemonDetail from '../Ducks/pokemonDetail'
import pokemonList from '../Ducks/pokemonList'

const appReducers = combineReducers({
  pokemonDetail,
  pokemonList,
})

const rootReducers = (state: any, action: any) => {
  return appReducers(state, action)
}

export default rootReducers
