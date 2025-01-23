// src/services/getPokemonListByType.ts
export const getPokemonListByType = async (type: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    const pokemonDetails = await Promise.all(
      data.pokemon.map((item: any) => fetch(item.pokemon.url).then((res) => res.json()))
    );
    return pokemonDetails;
  };
  