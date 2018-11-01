document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE
  let display = document.getElementById('pokemon-container')
  // let characterDiv = document.

  let pokemonJSON = fetch('http://localhost:3000/pokemon').then(
    function(response){ return response.json()}).then(
      function(json) {
        display.innerHTML = ""
        json.forEach(function(pokemon) {
          display.innerHTML += `<div id="${pokemon.name}"style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                    <h1 class="center-text">${pokemon.name}</h1>
                    <div style="width:239px;margin:auto">
                      <div style="width:96px;margin:auto">
                        <img id="${pokemon.id}" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
                      </div>
                    </div>
                  </div>`
          })
          images = document.getElementsByClassName("toggle-sprite")
          for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("click", function(event){
              if (images[i].src.includes("back")){
                images[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(images[i].id)}.png`
              } else {
                images[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${parseInt(images[i].id)}.png`
              }
            })

          }

        //   image.addEventListener("click", function(event){
        //     debugger
        //     if (image.src.includes("back")){
        //       image.src = `https://raw.githubusercontent.com/PokeAPI/srites/master/sprites/pokemon/${pokemon.id}.png`
        //     } else {
        //       image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`
        //     }
        //
        // })

      })

let pokemonSearch = document.getElementById('pokemon-search-form')
let pokemonInput = document.getElementById('pokemon-search-input')
// let pokemonInput = document.getElementsByTagName('input')[0]

pokemonInput.addEventListener('keyup', function(event) {
  display.innerHTML = ""
  fetch('http://localhost:3000/pokemon').then(
    function(response){ return response.json()}).then(
      function(json) {

        json.forEach(function(pokemon) {
          let pokelow = pokemon.name.toLowerCase()
          if (pokelow.includes(pokemonInput.value) || pokemon.name.includes())
          display.innerHTML += `<div id="${pokemon.name}"style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                    <h1 class="center-text">${pokemon.name}</h1>
                    <div style="width:239px;margin:auto">
                      <div style="width:96px;margin:auto">
                        <img id="${pokemon.id}" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
                      </div>
                    </div>
                  </div>`
        })


})
})
// let haveImage = document.getElementsByClassName('toggle-sprite')
//
// for (var i = 0 ; i < haveImage.length; i++)  {
//
//   haveImage[i].addEventListener("click", function(event) {
//
//   })
// }
})

// `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
//           <h1 class="center-text">${pokemon.name}</h1>
//           <div style="width:239px;margin:auto">
//             <div style="width:96px;margin:auto">
//               <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
//             </div>
//           </div>
//         </div>`
