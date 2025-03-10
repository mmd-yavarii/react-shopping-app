import { Routes, Route, Navigate } from 'react-router-dom';

import Layou from './Layout/Layou';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage/CartPage';
import BookmarkPage from './pages/BookmarkPage';
import ProfilePage from './pages/ProfilePage';
import ProductsDetails from './pages/ProductsDetails/ProductsDetails';
import ErrorPage from './pages/ErrorPage';
import AdminProfile from './pages/AdminProfile/AdminProfile';
import UserProfile from './pages/UserProfile/UserProfile';
import LoginPage from './pages/LoginPage/LoginPage';

import { useContext } from 'react';
import { LoginContext } from './contexts/LoginInfoProvider';

function App() {
    const { role, token } = useContext(LoginContext);

    return (
        <>
            <Layou isAdmin={role == 'admin'} isLogin={token}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductsDetails />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/bookmarks" element={<BookmarkPage />} />
                    <Route path="/*" element={<ErrorPage message="404" />} />
                    {/* nesed roue for admin or user profile */}
                    <Route
                        path={token ? '/profile' : '/login'}
                        element={token ? <ProfilePage /> : <LoginPage />}
                    >
                        {token && (
                            <>
                                <Route
                                    path="/profile/admin"
                                    element={
                                        role == 'admin' ? (
                                            <AdminProfile />
                                        ) : (
                                            <Navigate to="/" replace={true} />
                                        )
                                    }
                                />
                                <Route
                                    path="/profile/user"
                                    element={<UserProfile />}
                                />
                            </>
                        )}
                    </Route>
                </Routes>
            </Layou>
        </>
    );
}

export default App;
