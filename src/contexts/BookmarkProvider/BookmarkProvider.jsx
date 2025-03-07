import { createContext, useEffect, useReducer } from 'react';

const BookmarkContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];

        case 'REMOVE':
            return state.filter((i) => i.id !== action.payload);

        case 'CLEAR':
            return [];

        default:
            return state;
    }
}

if (!localStorage.getItem('bookmarks')) {
    localStorage.setItem('bookmarks', JSON.stringify([]));
}

const initialState = JSON.parse(localStorage.getItem('bookmarks')) || [];

function BookmarkProvider({ children }) {
    const [bookmarks, dispatchBookmarks] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    return (
        <BookmarkContext.Provider value={{ bookmarks, dispatchBookmarks }}>
            {children}
        </BookmarkContext.Provider>
    );
}

export { BookmarkContext, BookmarkProvider as default };
