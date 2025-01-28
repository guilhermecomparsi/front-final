import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';
import { getPokemonListByType } from '../services/getPokemonListByType'; 

export const PokemonTypePage = () => {
  const { type } = useParams<{ type: string }>(); 
  const [pokemons, setPokemons] = useState<any[]>([]); 

  useEffect(() => {
    const fetchPokemons = async () => {
      if (type) {
        const data = await getPokemonListByType(type);
        setPokemons(data);
      }
    };
    
    fetchPokemons();
  }, [type]);

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>
        <Typography variant="h6">Home</Typography>
      </Link>

      <Typography variant="h3" gutterBottom>
        Pokémons do Tipo {type}
      </Typography>
      
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item key={pokemon.name} xs={12} sm={6} md={4}>
            <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: "none" }}>
              <PokemonCard pokemonName={pokemon.name} pokemonNumber={pokemon.id} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
