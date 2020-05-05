export default {};

const BASE_URL =  'https://thinkful-list-api.herokuapp.com/Charita';

function getBookmarks() {
    return fetch(`${BASE_URL}/bookmarks`);
}

function createBookmark(title) {
    let newBookmark = {
        'title': title
    }
    newBookmark = store.stringify(newBookmark);

    return fetch(`${BASE_URL}/bookmarks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
};

function deleteBookmark() {
    
};

