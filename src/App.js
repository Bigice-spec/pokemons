import './App.css';
import React, {useEffect, useState } from 'react';
import Nav from './Nav'
import Cards from './Cards'
import Button from 'react-bootstrap/Button'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')
  const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=20'
  
  const getPokemons = async () => {
    const res = await fetch(baseURL)
    const data = await res.json()

    setNextPage(data.next)
    setPrevPage(data.previous)

    function pokemonChild(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemons(curr => [...curr, data])
      });
    }
    pokemonChild(data.results)
  }

  const next = async () => {
    const res = await fetch(nextPage)
    const data = await res.json()

    setNextPage(data.next)
    setPrevPage(data.previous)

    function pokemonChild(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemons(curr => [...curr, data])
      });
    }
    pokemonChild(data.results)
  }

  const prev = async () => {
    if (!prevPage) return;
    const res = await fetch(prevPage)
    const data = await res.json()

    setNextPage(data.next)
    setPrevPage(data.previous)

    function pokemonChild(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemons(curr => [...curr, data])
      });
    }
    pokemonChild(data.results)
  }

  useEffect( () => {
    getPokemons()
  }, [])

  return (
    <>
      <Nav />
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', marginBottom:'20px'}}>
        <Button variant="secondary" onClick={prev}>Back</Button>
        <Button variant="secondary" onClick={next}>Next</Button>
      </div>
      <div style={{display: 'flex', flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'center', gap: '20px', textAlign: 'center', backgroundColor: 'beige' }}>
        {pokemons.map((pokemon, i) => 
          <Cards
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          id={pokemon.id}
          key={i}
          />
        )}
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', marginTop:'20px'}}>
        <Button variant="secondary" onClick={prev}>Back</Button>
        <Button variant="secondary" onClick={next}>Next</Button>
      </div>
    </>
  );
}

export default App;