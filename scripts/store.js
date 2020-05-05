const bookmarks = [];
let showError
let errorMessage 



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
    this.bookmarks = this.filter(currentBookmark => currentBookmark.id !==id);
};

const setError = function (error) {
    this.error = error;
};

export default {
    bookmarks,
    error,
    showError,
    findById,
    addBookmark,
    findAndUpdate,
    findAndDelete,
    setError
};

