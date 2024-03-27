import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import './Home.css';
import { FavoriteContext } from '../../context/FavoriteContext';

export default function Home() {
    const navigate = useNavigate();
    const { favofite, addFavorite} = useContext(FavoriteContext);

    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchCharacters = async () => {
            const url = search
                ? `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(search)}`
                : 'https://rickandmortyapi.com/api/character';

            try {
                const response = await fetch(url);
                const data = await response.json();
                setCharacters(data.results || []);
            } catch (error) {
                console.error('Erro ao buscar personagens:', error);
            }
        };

        fetchCharacters();
    }, [search]);

    const mostrar = (id) => {
        navigate(`/character/${id}`)
    }


    return (
        <section>
            <div className='header'>
                <div className="description">
                    <h1>Bem vindo ao glossário de Rick e Morty! </h1>
                    <p>Escolha um personagem para ver mais informações.</p>
                </div>

                <div className="search">
                    <input placeholder='Pesquise pelo nome' type="text" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>



            <ul>
                {characters.map((character, idx) =>
                    <Card 
                    isFavorite={favofite.includes(character.id)} 
                    setFavorite={e => addFavorite(character.id)}
                    key={idx + 'all'} 
                    onClick={() => mostrar(character.id)} 
                    title={character.name} 
                    subtitle={character.species}>
                        <img src={character.image} alt={character.name} />
                    </Card>)}
            </ul>
        </section>
    )
}