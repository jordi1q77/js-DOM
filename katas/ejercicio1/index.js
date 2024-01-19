//!1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector(".showme"));
//!1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector("#pillado"));
//!1.3 Usa querySelector para mostrar por consola todos los p
const ps = document.querySelectorAll("p");
for (const p of ps) {
    console.log(p);
}

//!1.4 Usa querySelector para mostrar por consola todos los elementos con 
//!la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
for (const pokemon of pokemons) {
    console.log(pokemon);
}
//!1.5 Usa querySelector para mostrar por consola todos los elementos con 
//!el atributo data-function="testMe".
const testMes = document.querySelectorAll('[data-function="testMe"]');
for (const testMe of testMes) {
    console.log(testMe);
}
//!1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//!data-function="testMe".

const testMes2 = document.querySelectorAll('[data-function="testMe"]');
console.log(testMes2[2]);