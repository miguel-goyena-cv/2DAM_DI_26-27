import { BotonSaludar } from "./botones.js";
import { TextBox } from "./textbox.js";

let textbox = new TextBox('misaludo', 'Dime un saludo');
textbox.pintarHtml();

let boton = new BotonSaludar('miboton', 'Saludar', textbox.getHtmlELement());
let elementoBoton = boton.crearHtmlElement();
document.body.appendChild(elementoBoton);

let boton2 = new BotonSaludar('miboton', 'Saludar Otrea Vez', textbox.getHtmlELement());
let elementoBoton2 = boton.crearHtmlElement();
document.body.appendChild(elementoBoton2);


