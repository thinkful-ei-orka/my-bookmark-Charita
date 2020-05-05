//const bookmarks = [];
//let showError
//let errorMessage 

const store = {
    bookmarks: [],
    adding: false,
    error: null,
    filter: 0
  };

const findById = function (id) {
    return this.bookmarks.find(currentBookmark => currentBookmark.id ===id);
};

const addBookmark= function (bookmark) {
    this.bookmarks.push(bookmark);
};

const findAndUpdate = function (id, newData) {
    let newBookmark = this.findById(id);
};

