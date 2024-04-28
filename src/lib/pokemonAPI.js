
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
  const data = await response.json()
  console.log("data is: ", data)
  const monList = data.results;
  console.log("monList is: ", monList)
  let promises = monList.map((pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
  });
  const results = await Promise.all(promises)
   return Promise.all(results.map((r) => r.json()))
    // .then((res) => {
    //   setPokeList(res);
    //   setLoading(false);
    // });
  }
  catch(e){
    console.log(e)};
    }

  export async function getMoveList(pokemon){
    let promises = pokemon.moves.map((move)=>{
      return fetch(move.url)
    })
    const results = await Promise.all(promises)
    return Promise.all(results.map((r) =>r.json()))
  
  }

  export async function getPokemon(pokemon){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let monData = await response.json();
    console.log("monData is: ", monData)
    return monData;
  }