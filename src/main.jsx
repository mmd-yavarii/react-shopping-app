import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';

import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './contexts/ProductsProvider.jsx';
import CartProvider from './contexts/CartProvider.jsx';
import BookmarkProvider from './contexts/BookmarkProvider.jsx';
import LoginInfoProvider from './contexts/LoginInfoProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <BrowserRouter>
                <LoginInfoProvider>
                    <ProductsProvider>
                        <BookmarkProvider>
                            <App />
                        </BookmarkProvider>
                    </ProductsProvider>
                </LoginInfoProvider>
            </BrowserRouter>
        </CartProvider>
    </StrictMode>,
);
