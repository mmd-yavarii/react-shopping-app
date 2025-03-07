import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

function ProductCard({ info }) {
    const { image, title, price, id, rating } = info;

    return (
        <Link to={`/product/${id}`} state={info}>
            <div className={styles.cards}>
                <img src={image} alt={title} />

                <div className={styles.cardInfo}>
                    <p>{title}</p>
                    <p className={styles.rate}>
                        {rating.rate} <TiStarFullOutline color="orange" />
                    </p>
                    <p>{price} $</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
