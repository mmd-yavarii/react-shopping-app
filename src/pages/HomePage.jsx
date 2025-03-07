import ProductList from '../components/CaredsList/ProductList';
import FilterProducts from '../components/FilterProducts/FilterProducts';

function HomePage() {
    return (
        <div>
            <FilterProducts />
            <ProductList />
        </div>
    );
}

export default HomePage;
