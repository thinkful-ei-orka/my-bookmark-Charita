const bookmarks = [];
let adding = false;
let error = null;
let filter = 0;


const findById = function (id) {
    return this.bookmarks.find(currentBookmark => currentBookmark.id ===id);
};

const addBookmark= function (bookmark) {
    this.bookmarks.push(bookmark);
};

const findAndUpdate = function (id, newData) {
    let newBookmark = this.findById(id);

    Object.assign(newBookmark, newData);
};

const findAndDelete = function (id) {
    this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !==id);
};

const filterList = function (rating) {
    this.filter = rating;
    let filterBookmarks = this.bookmarks.filter(bookmark =>
        bookmark.rating >= this.filter);
        return filterBookmarks;
};

const setError = function (error) {
    this.error = error;
};

export default {
    bookmarks,
    adding,
    error,
    showError,
    findById,
    addBookmark,
    findAndUpdate,
    findAndDelete,
    setError
};

