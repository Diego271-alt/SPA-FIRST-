//creamos una funciçon que retorna la vis5a de nuestro producto
import getData from '../utils/getData';


const Home = async () =>{

    const characters = await getData();
    //creamos nuestro template base para idetificar y generar el llamado de la api y mostrarlo
    const view= `
    <div class="Characters">
        ${characters.results.map( character =>`
            <article class="Character-item">
                <a href="#/${character.id}"> 
                    <img src="${character.image}"  alt="${character.name}">
                    <h2>${character.name}</h2>
        
                </a>
            </article>
        `).join(``)}
    
    </div>    
    `;
    //lo mandamos
    return view;

};

//lo estamos exportando para permitir indentificar si este archivo puede ser usado en otros 
//archivos de js 

export default Home;