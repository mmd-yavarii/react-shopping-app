import { IoSearchSharp } from 'react-icons/io5';

import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsProvider';

import styles from './FilterProducts.module.css';
import { useSearchParams } from 'react-router-dom';

function FilterProducts() {
    // queries
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category') || 'all';
    const searchQuery = searchParams.get('search') || '';

    const [searchInp, setSearchInp] = useState(searchQuery);
    const { displayProducts, products, setDisplayProducts } =
        useContext(ProductsContext);

    // set filters with queries
    useEffect(() => {
        let filteredProducts = products;

        if (categoryQuery !== 'all') {
            filteredProducts = filteredProducts.filter(
                (i) => i.category === categoryQuery,
            );
        }

        if (searchQuery.trim()) {
            filteredProducts = filteredProducts.filter((i) =>
                i.title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        }

        setDisplayProducts(filteredProducts);
    }, [categoryQuery, searchQuery, products]);

    // clear search query string when inp is empty
    useEffect(() => {
        if (!searchInp.length) {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete('search');
            setSearchParams(newSearchParams, { replace: true });
        }
    }, [searchInp]);

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

    // set search query
    function searchHandle() {
        if (searchInp.length) {
            const newSearchParams = new URLSearchParams();
            newSearchParams.set('search', searchInp);
            setSearchParams(newSearchParams, { replace: true });
        }
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
                <button onClick={searchHandle}>
                    <IoSearchSharp fontSize="1.2rem" />
                </button>
            </div>

            <div className={styles.filterBtnsContainer}>
                {categories.map((item, index) => (
                    <button
                        key={index}
                        onClick={setCategoryHandler}
                        className={
                            categoryQuery == item
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
