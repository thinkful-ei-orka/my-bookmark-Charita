const BASE_URL =  'https://thinkful-list-api.herokuapp.com/Charita';


const getBookmarks = function() {
    return fetch(`${BASE_URL}/bookmarks`);
}

const createBookmark = function(id,title,url,desc,rating) {
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

const updateBookmark = function(id, updateData) {
    let newUrl = `${BASE_URL}/bookmarks/${id}`;
    let newBookmark = JSON.stringify(updateData);

    return fetch(newURL, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
}

const deleteBookmark = function(id) {
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


    
    


