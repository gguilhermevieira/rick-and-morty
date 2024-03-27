import './Character.css';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import DataLabel from '../../components/data-label/DataLabel';

export default function Character() {
    const { id } = useParams();

    const [character, setCharacter] = useState({});


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(cr => setCharacter(cr));
    }, [id]);

    return (
        <section>
            <div className="profile">
                <img src={character.image} alt="" />

                <div className="info">
                    <h1>{character.name}</h1>
                    <h2>{character.species}</h2>

                    <div className="infos">
                        <DataLabel label="Status" value={character.status} />
                        <DataLabel label="Gênero" value={character.gender === 'Male' ? 'Masculino' :'Feminino'} />
                        <DataLabel label="Origem" value={character.origin ? character.origin.name : ''} />
                        <DataLabel label="Origem" value={character.location ? character.location.name : ''} />
                    </div>
                </div>
            </div>
        </section>
    )
}