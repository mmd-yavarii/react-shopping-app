import { createContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];

        case 'REMOVE':
            const index = state.findIndex((i) => i.id === action.payload);
            return state.filter((i, ind) => ind != index);
    }
}

const initialStae = JSON.parse(localStorage.getItem('cart')) || [];

function CartProvider({ children }) {
    const [cart, dispatchCart] = useReducer(reducer, initialStae);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatchCart }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider as default };
