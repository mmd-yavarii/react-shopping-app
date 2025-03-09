import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from './ProfilePage.module.css';

function ProfilePage({ userOrAdmin }) {
    const location = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        if (location == '/profile') {
            navigate(`/profile/${userOrAdmin}`, { replace: true });
        }
    }, []);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ProfilePage;
