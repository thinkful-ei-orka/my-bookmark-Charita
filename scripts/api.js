const BASE_URL =  'https://thinkful-list-api.herokuapp.com/Charita';

const bookmarkApiFetch = function (...args) {
    // setup var in scope outside of promise chain
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
  
          
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        
        return res.json();
      })
      .then(data => {
        
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
  
        return data;
      });
  };

const getBookmarks = function() {
    return fetch(`${BASE_URL}/bookmarks`);
}

const createBookmark = function(newBookmark) {
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

    return bookmarkapifetch(newURL, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
    });
}

const deleteBookmark = function(id) {
    let newURL = `${BASE_URL}/bookmarks/${id}`;

    return bookmarkApifetch(newUrl,{
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


    
    


