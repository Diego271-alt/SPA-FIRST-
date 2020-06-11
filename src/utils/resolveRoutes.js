// se encarga de identificat a que template este se tiene que mover
// va a pasar la ruta obtenida por la función anterior así que esta lo que va a hacer 
// es recbit un parametro 
const resolveRoutes = (route) =>{
    if(route.length  <= 3){
        // lo que estamos creando es un if ternario 
        // la primer parte noas asegura que validRoute quesea igual a dos posibles resultados 
        // el primer valor posible es que route sea === '/' 
        // el otro valor es que si no '/' entonces la route es un id y se lanza '/:id'
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    //en dado caso de que las cosas no entren dentro de la logica anterior es decir:7
    /*en el caos de la logica anterior lo que estamos haciendo es
    cómo no hay de 100 personajes a lo ams se van a tener tres caracteres por ruta 
    pero en este caso tenemos secciones por ejemplo about 
    en este caso abaout es una de las opciones que tenemos y no entra en la logica inical
    entonces lo que se hace es retornar la ruta dada en este caso si es una sección de mas de tres caracteres 
    esta misma se va a lanzar por aqui */
    return `/${route}`;


};

export default resolveRoutes;