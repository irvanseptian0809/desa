import React from 'react'
import PokemonCard from '../../Components/PokemonCard'
import SectionLoading from '../../Components/SectionLoading'
import Button from '../../Components/Button'
import Menubar from '../../Components/Menubar'

import { interfacePokemonList } from '../../Redux/Ducks/pokemonList'

interface interfacePokemonListView {
  pokemonList: interfacePokemonList[],
  handlePokemonDetail: (pokemonName: string) => void,
  handleFintOtherPokemons: () => void,
  isLoading: boolean,
}

const PokemonListView = ({
  pokemonList,
  isLoading,
  handlePokemonDetail,
  handleFintOtherPokemons,
}: interfacePokemonListView) => {
  return (
    <>
      asdfasdf
      <Menubar />
      asdfasdf
    </>
  )
}

export default PokemonListView