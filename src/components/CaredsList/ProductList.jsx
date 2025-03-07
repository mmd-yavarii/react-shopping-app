import { ProductsContext } from '../../contexts/ProductsProvider';
import { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
    const { displayProducts, setDisplayProducts } = useContext(ProductsContext);

    return (
        <div>
            {displayProducts.map((i) => (
                <ProductCard key={i.id} info={i} />
            ))}
        </div>
    );
}

export default ProductList;
