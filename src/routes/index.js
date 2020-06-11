//lo que estamos haciendo es importar las views que ya creamos anteriormente
import  Header from '../templates/header';

import Home from '../pages/home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
//vamos a indexar nuestras rutas en este caso cada elemento 
//de  nuestro objeto será una ruta 
const routes= {

    //cada elemento representa una ruta de nuestra pagina
    '/': Home,
    //se pone así dado que esto es una 
    '/:id': Character,
    '/contact': 'contact',

};

const router = async () =>{
    const header = null || document.getElementById('header');
    const content= null || document.getElementById('content');
    header.innerHTML = await Header();
    let hash = getHash();
    
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export default router;
