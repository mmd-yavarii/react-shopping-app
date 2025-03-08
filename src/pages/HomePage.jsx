import ProductList from '../components/CaredsList/ProductList';
import FilterProducts from '../components/FilterProducts/FilterProducts';

import { TbFileSad } from 'react-icons/tb';

import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsProvider';
import Empty from '../components/Empty';

function HomePage() {
    const { displayProducts } = useContext(ProductsContext);

    return (
        <div>
            <FilterProducts />
            {displayProducts.length ? (
                <ProductList />
            ) : (
                <Empty
                    title="There is no Product"
                    message="We don't have a product with these specifications."
                    icon={<TbFileSad fontSize="2rem" />}
                />
            )}
        </div>
    );
}

export default HomePage;
