import { useLocation, useNavigate } from 'react-router-dom';

import { LuShare } from 'react-icons/lu';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

import styles from './ProductsDetails.module.css';
import { useState, useContext, useEffect } from 'react';
import QuantityControls from '../../components/QuantityControls/QuantityControls';

import { CartContext } from '../../contexts/CartProvider';
import { BookmarkContext } from '../../contexts/BookmarkProvider';

function ProductsDetails() {
    const { cart, dispatchCart } = useContext(CartContext);
    const { bookmarks, dispatchBookmarks } = useContext(BookmarkContext);

    const info = useLocation().state;
    const { image, title, price, description, id, rating } = info;

    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const [isBookmark, setIsBookmark] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

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

    // share page url
    function sharePage() {
        navigator.share({
            title: document.title,
            url: window.location.href,
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageComtainer}>
                <div className={styles.cardNav}>
                    <IoMdArrowRoundBack
                        fontSize="1.6rem"
                        onClick={() => navigate(-1)}
                    />

                    <div>
                        <button onClick={sharePage} className={styles.shareBtn}>
                            <LuShare fontSize="1.3rem" />
                        </button>

                        {isBookmark ? (
                            <FaHeart
                                color="red"
                                fontSize="1.3rem"
                                onClick={removeBookmark}
                            />
                        ) : (
                            <FaRegHeart
                                fontSize="1.3rem"
                                onClick={addBookmark}
                            />
                        )}
                    </div>
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
                        Buy
                    </button>
                )}
            </div>

            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default ProductsDetails;
