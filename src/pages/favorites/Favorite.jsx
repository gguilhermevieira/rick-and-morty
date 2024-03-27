import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import './Favorite.css';
import { FavoriteContext } from '../../context/FavoriteContext';


export default function Favorite() {
    const navigate = useNavigate();
    const { favofite, addFavorite} = useContext(FavoriteContext);

    const [favorites, setFavorites] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchCharacters = async () => {
            const url = search
                ? `https://rickandmortyapi.com/api/character/2`
                : `https://rickandmortyapi.com/api/character/2`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setFavorites(data.results || []);
            } catch (error) {
                console.error('Erro ao buscar personagens:', error);
            }
        };

        fetchCharacters();
    }, [search, favofite, favorites]);

    const mostrar = (id) => {
        navigate(`/character/${id}`)
    }


    return (
        <section>
            <div className='header'>
                <div className="description">
                    <h1>Aqui são seus personagens favoritos: {favorites.name} </h1>
                    <p>Escolha um personagem para ver mais informações.</p>
                </div>

                <div className="search">
                    <input placeholder='Pesquise pelo nome' type="text" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>

        
            <ul>
                
                {favorites.map((character, idx) =>
                    <Card 
                    isFavorite={favofite.includes(character.id)} 
                    setFavorite={e => addFavorite(character.id)}
                    key={idx + 'fav'} 
                    onClick={() => mostrar(character.id)} 
                    title={character.name} 
                    subtitle={character.species}>
                        <img src={character.image} alt={character.name} />
                    </Card>)}
            </ul>
        </section>
    )
}