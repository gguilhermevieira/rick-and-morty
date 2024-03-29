import './Card.css';
import { motion } from "framer-motion";

function Icon({ fav, click }) {
    return (
        <svg onClick={click} fill={fav ? 'red' : 'white'} height="30px" width="30px" version="1.1" viewBox="0 0 230 230">
            <path />
        </svg>
    );
};

export default function Card({ title, subtitle, onClick, isFavorite = false, setFavorite, children }) {
    return (
        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }} className='card'>
            {children}
            <div className="description">
                <div className="info">
                    <motion.h2>{title}</motion.h2>
                    <h3>{subtitle}</h3>
                </div>

                <motion.svg
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                width={20}
                onClick={setFavorite}
                height={30}
                viewBox={'0 0 230 230'}
                fill={isFavorite ? 'red' : 'white'}
                style={{outline: 'none'}}
                >
                    <motion.path
                    d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
                    c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
                    C235.26,57.99,236.537,96.466,213.588,120.982z"
                    />

                </motion.svg>
            </div>
        </motion.div>
    )
}