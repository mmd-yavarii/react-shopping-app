import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartProvider';

import styles from './CartPage.module.css';
import QuantityControls from '../../components/QuantityControls/QuantityControls';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cart, dispatchCart } = useContext(CartContext);
    const [dispyalCartItems, setDisplayCartItems] = useState([]);

    useEffect(() => {
        const uniqueItems = cart.filter(
            (item, index, self) =>
                index === self.findIndex((i) => i.id === item.id),
        );
        setDisplayCartItems(uniqueItems);
    }, [cart]);

    return (
        <div>
            {cart.length ? (
                <>
                    {dispyalCartItems.map((i) => (
                        <Cards info={i} key={i.id} />
                    ))}

                    <div className={styles.checkout}>
                        <div>
                            <p>
                                <span>Quantity</span> <span>{cart.length}</span>
                            </p>
                            <p>
                                <span>Total Price</span> <span>$ {100}</span>
                            </p>
                        </div>
                        <button>checkout</button>
                    </div>
                </>
            ) : (
                <EmptySession />
            )}
        </div>
    );
}

export default CartPage;

function EmptySession() {
    return (
        <div className={styles.emptyCart}>
            <img src="../public/emptyCart.png" alt="empty" />
            <p>Your Cart Is Empty</p>
            <span>Looks Like You Haven't Made Your Choise Yet...</span>
        </div>
    );
}

function Cards({ info }) {
    return (
        <div className={styles.cards}>
            <Link to={`/product/${info.id}`} state={info}>
                <img src={info.image} alt={info.title} />
            </Link>
            <div>
                <Link to={`/product/${info.id}`} state={info}>
                    <p className={styles.title}>{info.title}</p>
                    <p className={styles.price}>{info.price} $ </p>
                </Link>
                <QuantityControls info={info} />
            </div>
        </div>
    );
}
