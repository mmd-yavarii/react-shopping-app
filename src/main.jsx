import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';

import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './contexts/ProductsProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </BrowserRouter>
    </StrictMode>,
);
