import './Card.css';

export default function Card({ title, subtitle, onClick, isFavorite = false, setFavorite,children }) {
    return (
            <div className='card'>
                {children}
                <div className="description">
                    <div className="info">
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>

                    <span onClick={setFavorite}>{!isFavorite ? 'Favoritar' : 'Favorito'}</span>
                </div>
            </div>
    )
}