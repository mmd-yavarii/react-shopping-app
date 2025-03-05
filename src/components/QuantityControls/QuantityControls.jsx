import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';

import styles from './QuantityControls.module.css';

function QuantityControls({ info }) {
    const { cart, dispatchCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(cart.filter((i) => i.id == info.id).length);
    }, [cart]);

    // add to cart handler
    function increase() {
        dispatchCart({ type: 'ADD', payload: info });
    }

    // delete from cart hander
    function decrease() {
        dispatchCart({ type: 'REMOVE', payload: info.id });
    }

    return (
        <div className={styles.buttonsCointainer}>
            <button onClick={decrease}>-</button>
            <p>{quantity}</p>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityControls;
