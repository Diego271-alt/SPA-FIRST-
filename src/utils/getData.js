// vamos a traer los valores de api

const API = 'https://rickandmortyapi.com/api/character/';

// con esta función vamos a hacer render de las cosas qeu necesitamos 
const getData = async (id) => {
    // si nuestra funcion no recibe un id tra po defecto la api 
    // si si tare un id llama en este cuna nueva url
    // si el id existe entonces retorna la estructura con la api + el id recibido
    // si no solo lo que se hace es retornar la API 
    const apiURL = id ? `${API}${id}` : API;

    try{

        const response= await fetch(apiURL);
        const data= await response.json();
        return data;
    }catch (error){
        console.log('fetch error', error);
    }
};

export default getData;

