const BASE_URL =  'https://thinkful-list-api.herokuapp.com/Charita';

function getBookmarks() {
    return fetch(`${BASE_URL}/bookmarks`);
}

function createBookmark(title) {
    let newBookmark = {
        'title': title
    }
    newBookmark = JSON.stringify(newBookmark);

    return fetch(`${BASE_URL}/bookmarks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
};

function updateBookmark(id, updateData) {
    let newUrl = `${BASE_URL}/bookmarks/${id}`;
    let newBookmark = JSON.stringify(updateData);

    return fetch(newURL, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
}

function deleteBookmark(id) {
    let newURL = `${BASE_URL}/bookmarks/${id}`;

    return fetch(newUrl,{
        method: 'Delete',
        headers: {'Content-Type' : 'application/json'},
    });
}

export default {
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark,
};


    
    


