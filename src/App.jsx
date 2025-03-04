import { Routes, Route } from 'react-router-dom';

import Layou from './Layout/Layou';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BookmarkPage from './pages/BookmarkPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <>
            <Layou>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/bookmarks" element={<BookmarkPage />} />
                    {/* <Route path="/profile/:userid" element={<ProfilePage />} /> */}
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </Layou>
        </>
    );
}

export default App;
