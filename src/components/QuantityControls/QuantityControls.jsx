import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';

import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

import { BsCartPlus, BsCartDash } from 'react-icons/bs';

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
            <button onClick={decrease}>
                {quantity == 1 ? (
                    <MdOutlineRemoveShoppingCart />
                ) : (
                    <BsCartDash />
                )}
            </button>
            <p>{quantity}</p>
            <button onClick={increase}>
                <BsCartPlus />
            </button>
        </div>
    );
}

export default QuantityControls;
