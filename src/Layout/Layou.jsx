import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';
import { BookmarkContext } from '../contexts/BookmarkProvider/BookmarkProvider';

import { NavLink, useLocation } from 'react-router-dom';

import { GoHomeFill } from 'react-icons/go';
import { FaShoppingCart } from 'react-icons/fa';
import { IoBookmarks } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa6';

import styles from './Layout.module.css';

function Layou({ children }) {
    const loacation = useLocation().pathname;
    const { cart } = useContext(CartContext);
    const { bookmarks } = useContext(BookmarkContext);

    return (
        <div>
            {!loacation.includes('/product/') && (
                <header className={styles.header}>
                    <p>
                        {loacation == '/'
                            ? 'explore'
                            : loacation.replace('/', '')}
                    </p>
                </header>
            )}

            {children}

            {!loacation.includes('/product/') && (
                <footer className={styles.footer}>
                    <div>
                        <NavLink
                            replace={true}
                            to="/"
                            className={styles.footerBtn}
                        >
                            <GoHomeFill fontSize="1.45rem" />
                            <span>Home</span>
                        </NavLink>

                        <NavLink
                            replace={true}
                            to="/cart"
                            className={styles.footerBtn}
                        >
                            <FaShoppingCart className={styles.icons} />
                            {!!cart.length && (
                                <span className={styles.count}>
                                    {cart.length}
                                </span>
                            )}
                            <span>Cart</span>
                        </NavLink>

                        <NavLink
                            replace={true}
                            to="/bookmarks"
                            className={styles.footerBtn}
                        >
                            <IoBookmarks className={styles.icons} />
                            {!!bookmarks.length && (
                                <span className={styles.count}>
                                    {bookmarks.length}
                                </span>
                            )}
                            <span>Bookmarks</span>
                        </NavLink>

                        <NavLink
                            replace={true}
                            to="/profile"
                            className={styles.footerBtn}
                        >
                            <FaUser className={styles.icons} />
                            <span>Profile</span>
                        </NavLink>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default Layou;
