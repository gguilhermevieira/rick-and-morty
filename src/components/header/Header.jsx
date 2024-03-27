import { useContext } from 'react';
import './Header.css';
import { FavoriteContext } from '../../context/FavoriteContext';
import { Link } from 'react-router-dom';

export default function Header({ title, itens = [] }) {
    const { favofite } = useContext(FavoriteContext);
    
    return (
        <header>
            <p>{title}</p>

            <p>qtd favoritos: {favofite.length}</p>

            <nav>
                {itens.map((item, index) => {
                    return <Link to={item.route} key={index}> {item.name}</Link>
                })}
            </nav>
        </header>
    )
}