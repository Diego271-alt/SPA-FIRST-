//creamos una funciçon que retorna la vis5a de nuestro producto
const Home = () =>{
    //creamos nuestro template base para idetificar y generar el llamado de la api y mostrarlo
    const view= `
    <div class="Characters">
        <article class="Character-item">
        <a href="#/1"> 
            <img src="image"  alt="name">
            <h2>Name</h2>
        
        </a>
        </article>
    
    </div>    
    `;
    //lo mandamos
    return view;

};

//lo estamos exportando para permitir indentificar si este archivo puede ser usado en otros 
//archivos de js 

export default Home;