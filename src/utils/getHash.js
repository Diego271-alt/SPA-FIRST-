
//se encarga de obtener el número al que este se mueve 
//con esto obtenemos el id de lo que se esta moviendo

//loaction es un elemento del navegador
const getHash = () =>
     location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //sin parsearlo lo que obtenemos es /#1/ pero lo que necesitamoes solo el 1
// sin parsear se veria así ['#','/','1','/']
// una vez que aplicamos las funciones de slide borramos #
// y con las ootras obtenemos ['','1',''] accedemos a la posición uno dado que esta es la pos que necesito

export default getHash;