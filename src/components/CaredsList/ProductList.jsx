import { Link } from 'react-router-dom';
import styles from './ProductList.module.css';

import { ProductsContext } from '../../contexts/ProductsProvider';
import { useContext } from 'react';

function ProductList() {
    const { products } = useContext(ProductsContext);

    return (
        <div>
            {products.map((i) => (
                <ProductCard key={i.id} info={i} />
            ))}
        </div>
    );
}

export default ProductList;

function ProductCard({ info }) {
    const { image, title, price, id } = info;

    return (
        <Link to={`/product/${id}`} state={info}>
            <div className={styles.cards}>
                <img src={image} alt={title} />

                <div className={styles.cardInfo}>
                    <p>{title}</p>
                    <p>{price} $</p>
                </div>
            </div>
        </Link>
    );
}
