import { useContext } from 'react';
import './Header.css';
import { FavoriteContext } from '../../context/FavoriteContext';
import { Link, NavLink } from 'react-router-dom';

export default function Header({ title, itens = [] }) {
    const { favofiteIds } = useContext(FavoriteContext);
    
    return (
        <header>
            <p>{title}</p>

            <p><b>quantidade favoritos</b>: {favofiteIds.length}</p>

            <nav >
                {itens.map((item, index) => {
                    return <NavLink to={item.route} key={index}> {item.name}</NavLink>
                })}
            </nav>
        </header>
    )
}