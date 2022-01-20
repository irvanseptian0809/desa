const itemName = 'mypokemon_192847111111'

export const getMyPokemons = () => {
  const data = localStorage.getItem(itemName)
  const dataParse = JSON.parse(data || '[]')
  return data ? dataParse.pokemons : dataParse
}

export const addPokemons = (data: any) => {
  let myPokemons = getMyPokemons()
  myPokemons = {
    pokemons: [...myPokemons ,data]
  }
  return localStorage.setItem(itemName, JSON.stringify(myPokemons))
}

export const removePokemon = (nickname?: string) => {
  let myPokemons = getMyPokemons()
  myPokemons = {
    pokemons: myPokemons.filter((data: any) => data.nickname !== nickname)
  }
  return localStorage.setItem(itemName, JSON.stringify(myPokemons))
}

export const removeAllPokemons = () => {
  return localStorage.removeItem(itemName)
}
