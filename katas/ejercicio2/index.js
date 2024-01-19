//!1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.body.appendChild(div);
//!1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement("div");
const p = document.createElement("p");
divP.appendChild(p);
document.body.appendChild(divP);
//!1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//!	loop con javascript.
const div6P = document.createElement("div");

for (i=0;i<6;i++){
  const pn = document.createElement("p");
  div6P.appendChild(pn);
}
document.body.appendChild(div6P);

//!1.4 Inserta dinamicamente con javascript en un html una p con el 
//!	texto 'Soy dinámico!'.

const divPTexto = document.createElement("div");
const pTexto = document.createElement("p");
divPTexto.appendChild(pTexto);
divPTexto.textContent = "Soy dinámico!"
document.body.appendChild(divPTexto);
//!1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let H2 = document.querySelector(".fn-insert-here");
H2.textContent = "Wubba Lubba dub dub";

//!1.6 Basandote en el siguiente array crea una lista ul > li con 
//!los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");
for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    lista.appendChild(li);
} 
document.body.appendChild(lista);
//!1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let elements = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < elements.length;i++) {
  elements[i].remove();
}

//!1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//!	Recuerda que no solo puedes insertar elementos con .appendChild.
const divEntre = document.querySelector("div.fn-insert-here");
divEntre.insertAdjacentHTML("afterend","<p>Voy en medio</p>");
//!1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	//!.fn-insert-here
  const divDentro = document.querySelectorAll("div.fn-insert-here");

  for (const div of divDentro) {
      const p = document.createElement("p");
      p.textContent = "Voy dentro!";
      div.appendChild(p);
  }