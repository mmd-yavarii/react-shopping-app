import { useContext, useEffect } from 'react';
import { BookmarkContext } from '../contexts/BookmarkProvider';
import ProductCard from '../components/ProductCard/ProductCard';
import Empty from '../components/Empty';

import { TbBookmarksOff } from 'react-icons/tb';

function BookmarkPage() {
    const { bookmarks, dispatchBookmarks } = useContext(BookmarkContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const clearStyle = {
        color: 'red',
        backgroundColor: 'transparent',
        padding: '1em',
        fontSize: '1.1rem',
    };

    return (
        <div>
            {!!bookmarks.length ? (
                <>
                    <button
                        style={clearStyle}
                        onClick={() => dispatchBookmarks({ type: 'CLEAR' })}
                    >
                        clear
                    </button>
                    {bookmarks.map((i) => (
                        <ProductCard info={i} key={i.id} />
                    ))}
                </>
            ) : (
                <Empty
                    title="There is no Bookmark"
                    message="It seems you haven't saved anything yet."
                    icon={<TbBookmarksOff fontSize="2rem" />}
                />
            )}
        </div>
    );
}

export default BookmarkPage;
