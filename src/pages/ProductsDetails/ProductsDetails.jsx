import { useLocation, useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

import styles from './ProductsDetails.module.css';
import { useState, useContext, useEffect } from 'react';
import QuantityControls from '../../components/QuantityControls/QuantityControls';

import { CartContext } from '../../contexts/CartProvider';
import { BookmarkContext } from '../../contexts/BookmarkProvider/BookmarkProvider';

function ProductsDetails() {
    const { cart, dispatchCart } = useContext(CartContext);
    const { bookmarks, dispatchBookmarks } = useContext(BookmarkContext);

    const info = useLocation().state;
    const { image, title, price, description, id, rating } = info;

    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const [isBookmark, setIsBookmark] = useState(false);

    useEffect(() => {
        setIsBookmark(bookmarks.some((i) => i.id == id));
    }, [bookmarks]);

    useEffect(() => {
        setQuantity(cart.filter((i) => i.id == id).length);
    }, [cart]);

    // add to cart
    function addToCartHandler() {
        dispatchCart({ type: 'ADD', payload: info });
    }

    // add to bookmark
    function addBookmark() {
        dispatchBookmarks({ type: 'ADD', payload: info });
    }

    // remove from bookmark
    function removeBookmark() {
        dispatchBookmarks({ type: 'REMOVE', payload: id });
    }

    return (
        <div>
            <div className={styles.imageComtainer}>
                <div className={styles.cardNav}>
                    <IoMdArrowRoundBack
                        fontSize="1.6rem"
                        onClick={() => navigate(-1)}
                    />

                    {isBookmark ? (
                        <FaHeart
                            color="red"
                            fontSize="1.3rem"
                            onClick={removeBookmark}
                        />
                    ) : (
                        <FaRegHeart fontSize="1.3rem" onClick={addBookmark} />
                    )}
                </div>

                <img src={image} alt={title} />
            </div>

            <div className={styles.priceAndTitle}>
                <p className={styles.title}>{title}</p>

                <div className={styles.rate}>
                    {Array.from({ length: Math.floor(rating.rate) }, (_, i) => (
                        <span key={i}>
                            <TiStarFullOutline color="orange" fontSize="1rem" />
                        </span>
                    ))}
                    <p>
                        {rating.rate}{' '}
                        <span className={styles.reviews}>
                            {rating.count} Reviews
                        </span>
                    </p>
                </div>

                <p className={styles.price}>{price} $</p>
            </div>

            <div className={styles.btns}>
                {quantity ? (
                    <QuantityControls info={info} />
                ) : (
                    <button className={styles.buy} onClick={addToCartHandler}>
                        buy
                    </button>
                )}
            </div>

            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default ProductsDetails;
