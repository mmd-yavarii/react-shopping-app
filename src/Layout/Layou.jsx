import { NavLink, useLocation } from 'react-router-dom';

import { GoHomeFill } from 'react-icons/go';
import { FaShoppingCart } from 'react-icons/fa';
import { IoBookmarks } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa6';

import styles from './Layout.module.css';

function Layou({ children }) {
    const loacation = useLocation().pathname;

    return (
        <div>
            {children}

            {!loacation.includes('/product/') && (
                <footer className={styles.footer}>
                    <div>
                        <NavLink replace={true} to="/">
                            <GoHomeFill fontSize="1.45rem" />
                        </NavLink>

                        <NavLink replace={true} to="/cart">
                            <FaShoppingCart className={styles.icons} />
                        </NavLink>

                        <NavLink replace={true} to="/bookmarks">
                            <IoBookmarks className={styles.icons} />
                        </NavLink>
                        <NavLink replace={true} to="/profile">
                            <FaUser className={styles.icons} />
                        </NavLink>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default Layou;
