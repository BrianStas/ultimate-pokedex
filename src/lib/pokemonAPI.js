
const POKEMON_API = "https://pokeapi.co/api/v2/";

// TODO: get request for moves? Potentially get request for abilities?

export async function getPokemonList(){
    const response = await fetch(POKEMON_API + "pokemon?limit=50&offset=0");
    const data = await response.json();
    return data.results;
}
export async function getFullPokemonList(){
  try{
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const response = await fetch(url)
  const data = response.json()
  const monList = data.results;
  let promises = monList.map((pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
  });
  Promise.all(promises)
    .then((res) => Promise.all(res.map((r) => r.json())))
    .then((res) => {
      setPokeList(res);
      setLoading(false);
    });
  }
  catch(e){
    console.log(e)};
    }