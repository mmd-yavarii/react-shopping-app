import { deleteProduct } from '../../services/API';

import styles from './ProductCardAdmin.module.css';

function ProductCardAdmin({
    info,
    dispatchProducts,
    dispatchCart,
    dispatchBookmarks,
}) {
    // delete produc
    function deleteHandler(id) {
        const confirmaion = confirm('Are You Sure ?');
        if (confirmaion) {
            fetch(deleteProduct(info.id), {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    dispatchProducts({ type: 'DELETE', payload: data.id });
                    dispatchCart({ type: 'DELETE_PRODUCT', payload: data.id });
                    dispatchBookmarks({ type: 'REMOVE', payload: data.id });
                });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cell}>
                <img src={info.image} alt={info.title} />
            </div>
            <div className={styles.cell}>
                <p className={styles.title}>{info.title}</p>
            </div>
            <div className={styles.cell}>
                <p className={styles.price}>{info.price}</p>
            </div>
            <div className={styles.cell}>
                <button onClick={deleteHandler}>delete</button>
            </div>
        </div>
    );
}

export default ProductCardAdmin;
