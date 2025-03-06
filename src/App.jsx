import { Routes, Route } from 'react-router-dom';

import Layou from './Layout/Layou';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage/CartPage';
import BookmarkPage from './pages/BookmarkPage';
import ProfilePage from './pages/ProfilePage';
import ProductsDetails from './pages/ProductsDetails/ProductsDetails';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <>
            <Layou>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductsDetails />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/bookmarks" element={<BookmarkPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/*" element={<ErrorPage message="404" />} />
                </Routes>
            </Layou>
        </>
    );
}

export default App;
