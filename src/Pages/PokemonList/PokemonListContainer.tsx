import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { pokemonListFetch } from '../../Redux/Ducks/pokemonList'

import PokemonListView from './PokemonListView'

const PokemonListContainer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.pokemonList)

  const { pokemonList, isLoading } = state

  useEffect(() => {
    dispatch(pokemonListFetch())
  }, [dispatch])

  const handlePokemonDetail = (pokemonName: string) => {
    navigate('/pokemon-detail/'+pokemonName)
  }

  const handleFintOtherPokemons = () => {
    dispatch(pokemonListFetch())
  }

  const props = {
    pokemonList,
    isLoading,
    handlePokemonDetail,
    handleFintOtherPokemons,
  }

  return <PokemonListView {...props} />
}

export default PokemonListContainer