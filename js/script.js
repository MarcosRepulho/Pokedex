 const pokemonName = document.querySelector('.pokemon__name');
 const pokemonNumber = document.querySelector('.pokemon__number');
 const pokemonImage = document.querySelector('.pokemon__image');
 
 const form = document.querySelector('.form');
 const input = document.querySelector('.input__search');
const  buttonPrev = document.querySelector('.btn-prev');
const  buttonNext = document.querySelector('.btn-next');


let searchPokemon = 1;


const fetchpokemon = async (pokemon) => {
const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

if (APIResponse.status == 200){
const data =  await APIResponse.json();
return data;
}
}
const renderpokemon = async (pokemon) => {
    
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''
    
    
    const data = await fetchpokemon(pokemon);
    
    if (data ) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];    
        searchPokemon = data.id;
    }  else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found :c';
        pokemonNumber.innerHTML ='';
    }
}

form.addEventListener('submit', (event) => {
event.preventDefault();
renderpokemon(input.value.toLowerCase());
input.value = '';
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1){
        searchPokemon -= 1;
        renderpokemon(searchPokemon);
}
    });

    buttonNext.addEventListener('click', () => {
        searchPokemon += 1;
        renderpokemon(searchPokemon);
         });


renderpokemon(searchPokemon);







