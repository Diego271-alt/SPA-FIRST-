import router from '../src/routes/index';

//cuando el archivo se cargue se va a mandar a llamar este archivo

window.addEventListener('load',router);
window.addEventListener('hashchange',router);