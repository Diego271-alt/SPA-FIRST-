import router from '../src/routes/index';
import CSS from "../src/styles/main.css";
//cuando el archivo se cargue se va a mandar a llamar este archivo

window.addEventListener('load',router);
window.addEventListener('hashchange',router);