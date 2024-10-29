// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 1. Accept the request at /api/pokemon ✔
// 2. go to https://pokeapi.co/api/v2/pokemon/charmander and get the data ✔
// 3. (optional: simplify the data) ✔
// 4. return the data ✔

async function getPokemon(){
    const url = "https://pokeapi.co/api/v2/pokemon/charmander";
    const result = await fetch(url);
    const data = await result.json();
    return data;
}

// req = Request
// res = Response
export default async function handler(req, res) {
    // let q = req.query;
    // let friend = q.friend;
    const pokemon = await getPokemon();
    console.log(pokemon);
    res.status(200).json({ 
        pokemonName: pokemon.name,
        pokemonCry: pokemon.cries.latest,
        pokemonImgSrc: pokemon.sprites.front_default,
        firstAbility: pokemon.abilities[0].ability.name
    });
  }
  