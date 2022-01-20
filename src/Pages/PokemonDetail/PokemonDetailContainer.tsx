import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'

import { pokemonDetailFetch, pokemonDetailSetNickname } from '../../Redux/Ducks/pokemonDetail'
import { pokeCatch } from '../../Utils/pokemon'
import { getMyPokemons, addPokemons } from '../../Utils/localStorage'

import PokemonDetailView from './PokemonDetailView'

const PokemonDetailContainer = () => {
  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.pokemonDetail)
  const { data, isLoading } = state

  const [isModalShow, setIsModalShow] = useState(false)
  const [isCatching, setIsCatching] = useState(false)
  const [isCatch, setIsCatch] = useState(false)
  const [isUsedNickname, setIsUsedNickname] = useState(false)

  useEffect(() => {
    if (params.pokemon) {
      dispatch(pokemonDetailFetch(params.pokemon))
    } else {
      navigate('/')
    }
  }, [dispatch, navigate, params])

  const handleCatchPokemon = () => {
    const catchPokemon = pokeCatch(data.capture_rate)

    setIsCatching(true)
    setTimeout(() => {
      if (catchPokemon) {
        setIsCatch(catchPokemon)
      } else {
        setIsCatch(false)
      }
      setIsCatching(false)
    }, 7000)
    setIsModalShow(true)
  }

  const handleReleasePokemon = () => {
    setIsModalShow(false)
    setIsCatch(false)
    setIsUsedNickname(false)
    resetNickname()
  }

  const handleFindPokemon = () => {
    setIsModalShow(false)
    setIsUsedNickname(false)
    navigate('/')
  }

  const handleSavePokemon = () => {
    setIsModalShow(false)
    setIsModalShow(false)
    setIsUsedNickname(false)
    addPokemons(data)
    resetNickname()
  }

  const handleNickname = (nickname: string) => {
    const myPokemons = getMyPokemons()
    setIsUsedNickname(myPokemons.some((data: any) => data.nickname === nickname))
    dispatch(pokemonDetailSetNickname(nickname))
  }

  const resetNickname = () => {
    dispatch(pokemonDetailSetNickname(''))
  }

  const props = {
    pokemonDetail: data,
    isLoading,
    isModalShow,
    isCatching,
    isCatch,
    isUsedNickname,
    handleCatchPokemon,
    handleReleasePokemon,
    handleFindPokemon,
    handleSavePokemon,
    handleNickname,
  }

  return <PokemonDetailView {...props} />
}

export default PokemonDetailContainer