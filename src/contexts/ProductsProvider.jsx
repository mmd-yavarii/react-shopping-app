import { createContext, useEffect, useReducer, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import ErrorPage from '../pages/ErrorPage';
import { getProducts } from '../services/API.js';

const ProductsContext = createContext();

const initialState = {
    data: [],
    isLoading: true,
    error: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'SUCCESS':
            return { isLoading: false, error: '', data: action.payload };

        case 'FAILED':
            return { isLoading: false, error: action.payload, data: [] };

        case 'DELETE':
            return {
                ...state,
                data: state.data.filter((i) => i.id != action.payload),
            };

        case 'ADD_NEW_PRODUCT':
            return {
                ...state,
                data: [...state.data, action.payload],
            };

        default:
            throw new Error('Action is not defined');
    }
}

function ProductsProvider({ children }) {
    const [state, dispatchProducts] = useReducer(reducer, initialState);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch(getProducts)
            .then((res) => res.json())
            .then((json) => {
                dispatchProducts({ type: 'SUCCESS', payload: json });
                setDisplayProducts(json);
            })
            .catch((error) =>
                dispatchProducts({
                    type: 'FAILED',
                    payload: error?.message || 'Something went wrong',
                }),
            );
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                products: state.data,
                displayProducts,
                setDisplayProducts,
                dispatchProducts,
            }}
        >
            {state.isLoading && (
                <div className="loading">
                    <PulseLoader />
                </div>
            )}
            {state.error ? <ErrorPage message={state.error} /> : children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsProvider as default };
