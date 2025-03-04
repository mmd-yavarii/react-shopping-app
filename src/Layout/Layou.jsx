import { NavLink } from 'react-router-dom';

import { GrHomeRounded } from 'react-icons/gr';
import { BsCart3 } from 'react-icons/bs';

import { BsBookmarks } from 'react-icons/bs';
import { RiUserLine } from 'react-icons/ri';

import styles from './Layout.module.css';

function Layou({ children }) {
    return (
        <div>
            {children}

            <footer className={styles.footer}>
                <div>
                    <NavLink replace={true} to="/">
                        <GrHomeRounded className={styles.icons} />
                    </NavLink>

                    <NavLink replace={true} to="/cart">
                        <BsCart3 className={styles.icons} />
                    </NavLink>

                    <NavLink replace={true} to="/bookmarks">
                        <BsBookmarks className={styles.icons} />
                    </NavLink>
                    <NavLink replace={true} to="/profile">
                        <RiUserLine className={styles.icons} />
                    </NavLink>
                </div>
            </footer>
        </div>
    );
}

export default Layou;
