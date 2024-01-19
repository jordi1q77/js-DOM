//!1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//!evento click que ejecute un console log con la información del evento del click

const button1 = document.createElement("button");
button1.id = "btnToClick";
button1.addEventListener("click",(e) => console.log(e));
button1.textContent = "Click";
//console.log(button1);
document.body.appendChild(button1);
//!1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus",(e) => console.log(e.target.value));
//!1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input",(e) => console.log(e.target.value));
