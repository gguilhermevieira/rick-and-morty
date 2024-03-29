import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import './Favorite.css';
import { FavoriteContext } from '../../context/FavoriteContext';


export default function Favorite() {
    const navigate = useNavigate();
    const { favofiteIds, addFavoriteIds, removeFavoriteIds} = useContext(FavoriteContext);

    const [favorites, setFavorites] = useState([]);

    const [search, setSearch] = useState('');

    useEffect(() => {
        async function carregaRepositorios () {
          const resposta = await fetch(`https://rickandmortyapi.com/api/character/[${favofiteIds?.toString()}]`);
          const repositorios = await resposta.json();
            return repositorios;
        }
        if(favofiteIds.length > 0)
            carregaRepositorios().then((repositorios) => setFavorites(repositorios));
      }, []);

      
    const mostrar = (id) => {
        navigate(`/character/${id}`)
    }

    const remove = (id) => {
        removeFavoriteIds(id);
        setFavorites(favorites.filter(favorite => favorite.id !== id));
    }


    return (
        <section>
            <div className='header'>
                <div className="description">
                    <h1>Aqui são seus personagens favoritos: </h1>
                    <p>Escolha um personagem para ver mais informações.</p>
                </div>

                <div className="search">
                    <input placeholder='Pesquise pelo nome' type="text" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>

        
            <ul>
                {favorites.map((character, idx) =>
                    <Card
                    isFavorite={favofiteIds.includes(character.id)}
                    setFavorite={() => remove(character.id)}
                    key={idx + 'fav'} 
                    onClick={() => mostrar(character.id)} 
                    title={character.name} 
                    subtitle={character.species}>
                        <img src={character.image} alt={character.name} />
                    </Card>)}

                    {favorites.length === 0 && <h2>Nenhum personagem foi favoritado.</h2>}
            </ul>
        </section>
    )
}