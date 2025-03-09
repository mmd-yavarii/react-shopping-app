import styles from './AdminProfile.module.css';

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsProvider';
import ProductCardAdmin from './ProductCardAdmin';
import { CartContext } from '../../contexts/CartProvider';
import { BookmarkContext } from '../../contexts/BookmarkProvider';

function AdminProfile() {
    const { products, dispatchProducts } = useContext(ProductsContext);
    const { dispatchCart } = useContext(CartContext);
    const { dispatchBookmarks } = useContext(BookmarkContext);

    return (
        <div>
            {products.map((product) => (
                <ProductCardAdmin
                    info={product}
                    key={product.id}
                    dispatchProducts={dispatchProducts}
                    dispatchCart={dispatchCart}
                    dispatchBookmarks={dispatchBookmarks}
                />
            ))}
        </div>
    );
}

export default AdminProfile;
