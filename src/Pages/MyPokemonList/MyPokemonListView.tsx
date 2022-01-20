import React from 'react'
import { NavLink } from 'react-router-dom'

import PokemonCard from '../../Components/PokemonCard'
import Button from '../../Components/Button'

import { interfacePokemonDetailData } from "../../Redux/Ducks/pokemonDetail"

import "./styles.scss"

interface interfaceMyPokemonList {
  pokemons: interfacePokemonDetailData[],
  releasePokemon: (nickname?: string) => void,
  releaseAllPokemon: () => void,
}

const MyPokemonListView = ({
  pokemons,
  releasePokemon,
  releaseAllPokemon,
}: interfaceMyPokemonList) => {
  return (
    <>
      <div className="grid">
        {pokemons.map((data: interfacePokemonDetailData) => (
          <div className="col-2" key={data.id}>
            <PokemonCard
              name={data.name}
              img={data.image}
              nickname={data.nickname}
              button={
                <Button
                  label="Release Pokemon"
                  type="secondary"
                  onClick={() => releasePokemon(data.nickname)}
                  isFullWidth
                />
              }
            />
          </div>
        ))}
      </div>
      
      {pokemons.length > 0 ? (
        <Button
          size="large"
          label="Release all of my pokemons"
          type="secondary"
          onClick={releaseAllPokemon}
          isFullWidth
        />
      ) : (
        <>
          <h3 className="title-empty">You don't have any pokemon</h3>
          <NavLink to="/">
            <Button
              size="large"
              label="Find some pokemon"
              isFullWidth
            />
          </NavLink>
        </>
      )}
      
    </>
  )
}

export default MyPokemonListView