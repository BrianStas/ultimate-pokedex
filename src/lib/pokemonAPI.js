
const POKEMON_API = "https://pokeapi.co/api/v2/";

// TODO: get request for moves? Potentially get request for abilities?

export async function getPokemonList(){
    const response = await fetch(POKEMON_API + "pokemon?limit=50&offset=0");
    const data = await response.json();
    return data.results;
}