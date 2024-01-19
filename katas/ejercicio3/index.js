//!1.1 Basandote en el array siguiente, crea una lista ul > li 
//!dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
}
document.body.appendChild(ul);
//!1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let erased = document.querySelector(".fn-remove-me");
erased.remove();

//!1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//!en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
printHere = document.querySelector('[data-function="printHere"]'); 
const ulCars = document.createElement("ul");
for (const car of cars) {
	const li = document.createElement("li");
	li.textContent = car;
	ulCars.appendChild(li);
}
printHere.appendChild(ulCars);
//!1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//!h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (const country of countries2) {
	const div = document.createElement("div");
	const h4Title = document.createElement("h4");
	const imgConutry = document.createElement("img");
	h4Title.textContent = country.title;
	imgConutry.src = country.imgUrl;
	div.setAttribute("data-content","country");
	div.append(h4Title);
	div.append(imgConutry);
	document.body.appendChild(div);
}

//!1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//!elemento de la serie de divs.
const button = document.createElement("button");

const removelastCountry	= () => {
	const divs = document.querySelectorAll('[data-content="country"]');
	if (divs.length > 0 ){
		divs[divs.length-1].remove();
	}
};
button.addEventListener("click", removelastCountry);
button.textContent = "Borrar el último pais";
document.body.appendChild(button);
//!1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//!divs que elimine ese mismo elemento del html.

const divsCountries = document.querySelectorAll('[data-content="country"]');

for (const country of divsCountries) {
	const buttonCountry = document.createElement("button");
	buttonCountry.addEventListener("click",(e) => e.target.parentNode.remove());
	buttonCountry.textContent="Borrar este país";
	country.appendChild(buttonCountry);
}
