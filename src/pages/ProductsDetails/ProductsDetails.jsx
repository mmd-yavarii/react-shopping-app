import { useLocation, useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './ProductsDetails.module.css';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import QuantityControls from '../../components/QuantityControls/QuantityControls';

function ProductsDetails() {
    const { cart, dispatchCart } = useContext(CartContext);
    const info = useLocation().state;
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);

    const { image, title, price, description, id } = info;

    useEffect(() => {
        setQuantity(cart.filter((i) => i.id == id).length);
    }, [cart]);

    function addToCartHandler() {
        dispatchCart({ type: 'ADD', payload: info });
    }

    return (
        <div>
            <div className={styles.imageComtainer}>
                <IoMdArrowRoundBack
                    fontSize="1.6rem"
                    onClick={() => navigate(-1)}
                />

                <img src={image} alt={title} />
            </div>

            <div className={styles.priceAndTitle}>
                <p>{title}</p>
                <p>{price} $</p>
            </div>

            <p className={styles.description}>{description}</p>

            <div className={styles.btns}>
                {quantity ? (
                    <QuantityControls info={info} />
                ) : (
                    <button className={styles.buy} onClick={addToCartHandler}>
                        buy
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductsDetails;
