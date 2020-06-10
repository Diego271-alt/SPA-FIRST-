import getData from '../utils/getData';

import getHash from '../utils/getHash';

const Character= async () => {
    const id = getHash();
    const Character=  await getData(id);
    const view= `
        <div class="Character-inner">
        <article class="Characters-card">
            <img src="${Character.image}" alt="${Character.name}">
            <h2>${Character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodios: <span>${Character.episode.lenght}</span></h3>
            <h3>Status: <span>${Character.status}</span></h3>
            <h3>Especie: <span>${Character.species}</span></h3>
            <h3>Genero: <span>${Character.gender}</span></h3>
            <h3>Origen: <span>${Character.origin.name}</span></h3>
            <h3>Ultima locacion: <span>${Character.location.name}</span></h3>
        </article>

        </div>
    
    `;
    return view;
};

export default Character;