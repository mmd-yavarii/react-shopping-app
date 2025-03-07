import { IoSearchSharp } from 'react-icons/io5';

import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsProvider';

import styles from './FilterProducts.module.css';
import { useSearchParams } from 'react-router-dom';

function FilterProducts() {
    const [searchInp, setSearchInp] = useState('');
    const { displayProducts, products, setDisplayProducts } =
        useContext(ProductsContext);

    // queries
    const [searchParams, setSearchParams] = useSearchParams();
    const categorySelected = searchParams.get('category') || 'all';

    // set filters with queries
    useEffect(() => {
        if (categorySelected != 'all') {
            setDisplayProducts(
                products.filter((i) => i.category == categorySelected),
            );
        } else {
            setDisplayProducts(products);
        }
    }, [searchParams]);

    // category items for create filter buttons
    const categories = ['all', ...new Set(products.map((i) => i.category))];

    // set filter categories
    function setCategoryHandler(event) {
        const value = event.target.innerText;
        const key = 'category';
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(key, value);
        setSearchParams(newSearchParams, { replace: true });
    }

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInp}
                    onChange={(e) => setSearchInp(e.target.value)}
                />
                <button>
                    <IoSearchSharp fontSize="1.2rem" />
                </button>
            </div>

            <div className={styles.filterBtnsContainer}>
                {categories.map((item, index) => (
                    <button
                        key={index}
                        onClick={setCategoryHandler}
                        className={
                            categorySelected == item
                                ? styles.activeilterBtn
                                : styles.filerBtns
                        }
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterProducts;
