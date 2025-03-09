import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './AddNewProduct.module.css';
import { addNewProduct } from '../../services/API.js';

const initialState = {
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
};
function reducer(state, action) {
    switch (action.type) {
        case 'title':
            return { ...state, title: action.payload };

        case 'price':
            return { ...state, price: action.payload };

        case 'category':
            return { ...state, category: action.payload };

        case 'description':
            return { ...state, description: action.payload };

        case 'image':
            return { ...state, image: action.payload };

        case 'clear':
            return {
                title: '',
                price: 0,
                category: '',
                description: '',
                image: '',
            };

        default:
            return state;
    }
}

function AddNewProduct({ dispatchProducts }) {
    const [newProduct, dispachNewProduct] = useReducer(reducer, initialState);

    // add new product
    function submitHandler(event) {
        event.preventDefault();

        fetch(addNewProduct, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct),
        })
            .then((response) => response.json())
            .then((data) => {
                data.price = +data.price;
                dispatchProducts({
                    type: 'ADD_NEW_PRODUCT',
                    payload: {
                        ...data,
                        rating: { rate: 0.0, count: 0 },
                    },
                }),
                    alert('Product added succesfuly');
                dispachNewProduct({ type: 'clear' });
            })
            .catch((error) => alert(error.message));
    }

    return (
        <form onSubmit={submitHandler} className={styles.container}>
            <input
                type="text"
                placeholder="title"
                required={true}
                value={newProduct.title}
                onChange={(e) =>
                    dispachNewProduct({
                        type: 'title',
                        payload: e.target.value,
                    })
                }
            />

            <input
                type="number"
                placeholder="price"
                required={true}
                value={newProduct.price}
                onChange={(e) =>
                    dispachNewProduct({
                        type: 'price',
                        payload: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="category"
                required={true}
                value={newProduct.category}
                onChange={(e) =>
                    dispachNewProduct({
                        type: 'category',
                        payload: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="description"
                required={true}
                value={newProduct.description}
                onChange={(e) =>
                    dispachNewProduct({
                        type: 'description',
                        payload: e.target.value,
                    })
                }
            />
            <input
                type="file"
                accept="image/*"
                required={true}
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const imageUrl = URL.createObjectURL(file);
                        dispachNewProduct({ type: 'image', payload: imageUrl });
                    }
                }}
            />

            <button type="submit">Add</button>
        </form>
    );
}

export default AddNewProduct;
