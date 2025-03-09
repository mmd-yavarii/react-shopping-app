import { Routes, Route, Navigate } from 'react-router-dom';

import Layou from './Layout/Layou';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage/CartPage';
import BookmarkPage from './pages/BookmarkPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProductsDetails from './pages/ProductsDetails/ProductsDetails';
import ErrorPage from './pages/ErrorPage';
import AdminProfile from './pages/AdminProfile/AdminProfile';
import UserProfile from './pages/UserProfile/UserProfile';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
    const isAdmin = true;
    const isLogin = true;

    return (
        <>
            <Layou isAdmin={isAdmin} isLogin={isLogin}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductsDetails />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/bookmarks" element={<BookmarkPage />} />
                    <Route path="/*" element={<ErrorPage message="404" />} />
                    {/* nesed roue for admin or user profile */}
                    <Route
                        path={isLogin ? '/profile' : '/login'}
                        element={isLogin ? <ProfilePage /> : <LoginPage />}
                    >
                        {isLogin && (
                            <>
                                <Route
                                    path="/profile/admin"
                                    element={
                                        isAdmin ? (
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
