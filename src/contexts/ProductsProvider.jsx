import { createContext, useEffect, useReducer } from 'react';
import { PulseLoader } from 'react-spinners';
import ErrorPage from '../pages/ErrorPage';

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

        default:
            throw new new Error('Action is not defined')();
    }
}

function ProductsProvider({ children }) {
    const [state, dispatchProducts] = useReducer(reducer, initialState);
    const products = state.data;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) =>
                dispatchProducts({ type: 'SUCCESS', payload: json }),
            )
            .catch((error) =>
                dispatchProducts({ type: 'FAILED', payload: error.message }),
            );
    }, []);

    return (
        <ProductsContext.Provider value={{ products, dispatchProducts }}>
            {state.isLoading && <PulseLoader className="loading" />}
            {state.error ? <ErrorPage message={state.error} /> : children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsProvider as default };
