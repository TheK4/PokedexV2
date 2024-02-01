const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type">${type}</li`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})


//     const listItems = []

//     for (let i = 0; i < pokemons.length; i++) {
//         const pokemon = pokemons[i];
//         listItems.push(convertPokemonToLi(pokemon))
//     }

//     console.log(listItems)