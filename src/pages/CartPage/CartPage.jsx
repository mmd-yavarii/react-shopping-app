import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartProvider';

import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

import styles from './CartPage.module.css';
import QuantityControls from '../../components/QuantityControls/QuantityControls';
import { Link } from 'react-router-dom';
import Empty from '../../components/Empty';

function CartPage() {
    const { cart, dispatchCart } = useContext(CartContext);
    const [dispyalCartItems, setDisplayCartItems] = useState([]);
    const totalPrice = cart
        .reduce((acc, item) => acc + item.price, 0)
        .toFixed(2);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
                                <span>Total Price</span>{' '}
                                <span>$ {totalPrice}</span>
                            </p>
                        </div>
                        <button>checkout</button>
                    </div>
                </>
            ) : (
                <Empty
                    title="Your Cart Is Empty"
                    message="Looks Like You Haven't Made Your Choise Yet..."
                    icon={<MdOutlineRemoveShoppingCart fontSize="2rem" />}
                />
            )}
        </div>
    );
}

export default CartPage;

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
