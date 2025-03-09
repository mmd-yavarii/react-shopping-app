import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './AddNewProduct.module.css';

const initialState = {
    id: null,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
    rating: {
        rate: 0,
        count: 0,
    },
};
function reducer(state, action) {
    state = { ...state, id: uuidv4() };

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

        default:
            return state;
    }
}

function AddNewProduct() {
    const [newProduct, dispachNewProduct] = useReducer(reducer, initialState);

    function submitHandler(event) {
        event.preventDefault();

        console.log(newProduct);
    }

    return (
        <form onSubmit={submitHandler} className={styles.container}>
            <input
                type="text"
                placeholder="title"
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
