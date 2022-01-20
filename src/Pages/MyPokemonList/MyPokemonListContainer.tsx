import React, { useEffect, useState } from 'react'
import { getMyPokemons, removePokemon, removeAllPokemons } from '../../Utils/localStorage'

import MyPokemonListView from './MyPokemonListView'

const MyPokemonListContainer = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    setPokemons(getMyPokemons())
  }, [setPokemons, getMyPokemons])

  const releasePokemon = (nickname?: string) => {
    removePokemon(nickname)
    setPokemons(getMyPokemons())
  }

  const releaseAllPokemon = () => {
    removeAllPokemons()
    setPokemons([])
  }

  const props = {
    pokemons,
    releasePokemon,
    releaseAllPokemon,
  }

  return <MyPokemonListView {...props} />
}

export default MyPokemonListContainer