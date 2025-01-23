// src/routes/Home.page.tsx
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from "../components/PokemonCard";
import { styled } from "@mui/system"; 

const CustonLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: block;
`;

export function HomePage() {
    const { pokemons, next } = useLoaderData() as { pokemons: any[], next: string };

    const [pokemonList, setPokemonList] = React.useState(pokemons);
    const [nextPage, setNextPage] = React.useState(next);

    const fetchNextPage = async () => {
        const data = await fetch(nextPage).then(res => res.json()).catch(console.error);
        setPokemonList(prev => [...prev, ...data.results]);
        setNextPage(data.next);
    };

    return (
        <>
            <ScrollRestoration />
            <Header title="PokeDex" />

            {/* Filtro de Tipos */}
            <Box sx={{ marginBottom: "1rem" }}>
                <Button
                    component={Link}
                    to="/pokemons/type/grass"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Grama
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/fire"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Fogo
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/water"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Água
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/electric"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Elétrico
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/ground"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Terrestre
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/rock"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Pedra
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/flying"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Voador
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/poison"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Tóxico
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/bug"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Inseto
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/fairy"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Fada
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/psychic"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Psíquico
                </Button>
                <Button
                    component={Link}
                    to="/pokemons/type/normal"
                    variant="contained"
                    sx={{ marginRight: "0.5rem" }}
                >
                    Tipo Normal
                </Button>
                {/* Adicione mais tipos conforme necessário */}
            </Box>

            <Container maxWidth="lg" sx={{ padding: "1.5rem" }}>
                <InfiniteScroll
                    dataLength={pokemonList.length}
                    next={fetchNextPage}
                    hasMore={!!nextPage}
                    loader={<Typography>Loading...</Typography>}
                >
                    <Grid container spacing={2}>
                        {pokemonList.map((item, index) => (
                            <Grid item key={item.name} xs={12} sm={6} md={4}>
                                <CustonLink to={`/pokemon/${index + 1}`}>
                                    <PokemonCard pokemonName={item.name} pokemonNumber={index + 1} />
                                </CustonLink>
                            </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            </Container>
        </>
    );
}
