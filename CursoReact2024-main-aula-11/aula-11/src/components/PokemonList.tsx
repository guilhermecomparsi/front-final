import { useEffect, useState } from "react";
import { Pokemon } from "../types";
import { List, ListItem } from "./List"; 
import { getPokemonList } from "../services/getPokemonList"; 
import { getPokemon } from "../services/getPokemon";


interface PokemonListResponse {
  results: { name: string; url: string }[]; 
}

interface Props {
  selectedType: string; 
}

const PokemonList = ({ selectedType }: Props) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPokemons = async () => {
      const data: PokemonListResponse = await getPokemonList(); 
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemonData) => {
          const pokemonId = pokemonData.url.split("/").slice(-2, -1)[0];
          const details = await getPokemon(Number(pokemonId)); 
          return details;
        })
      );
      setPokemons(detailedPokemons); 
      setLoading(false); 
    };

    fetchPokemons();
  }, []);

  const filterPokemonsByType = (pokemon: Pokemon) => {
    if (selectedType === "") return true; 
    return pokemon.types.some((pokemonType) => pokemonType.type.name === selectedType);
  };

  if (loading) {
    return <div>Carregando...</div>; 
  }

  return (
    <List>
      {pokemons.filter(filterPokemonsByType).map((pokemon) => (
        <ListItem key={pokemon.name}>
          <div>{pokemon.name}</div>
        </ListItem>
      ))}
    </List>
  );
};

export default PokemonList;
