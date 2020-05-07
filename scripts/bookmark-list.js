import $ from 'jquery';
import store from './store';
import api from '.api';

const generateMainPage = function () {
return `
    <button class="add-bookmark">
    <span>Add Bookmark</span>
    </button>
        <select id="filter-ratings">
        <span>Filter-Ratings</span>
        <option value="">--Filter by Rating--</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
    </select>`;
};

const generateBookmarkElement = function (bookmark) {
    if (bookmark.expanded) {
        return `
              <li class="bookmark-expanded" data-id="${bookmark.id}">
              <h2>${bookmark.title}</h2> <div class="rating">Rating: ${bookmark.rating}</div>
              <a href="${bookmark.url}" target="blank" class="button-link">Visit ${bookmark.title}!</a><span class="rating-${bookmark.rating}">   </span>
              <div class="description">                    
              <p>${bookmark.desc}</p>
              </div>
              <button type="button" class="buttonD button-delete">Delete</button> 
              </li>
              `;
      }
      else {
        return `
            <li class="bookmark" data-id="${bookmark.id}">
            <h2>${bookmark.title}</h2> 
            <div class="rating">Rating: ${bookmark.rating}</div>
            </li>
            `;
      }
    };

const generateBookmarkString = function (bookmark) {
    const bookmarks= bookmark.map(bookmark => 
        generateBookmarkElement(bookmark));
  return bookmarks.join('');
}; 

const generateError = function (message) {
    return `
      <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
};

const renderError = function () {
    if (store.error) {
        const el = generateError(store.error);
        $('.error-container').html(el);
      } else {
        $('.error-container').empty();
      }
    };


const handleCloseError = function () {
    $('.error-container').on('click', '#cancel-error', () => {
        store.setError(null);
        renderError();
      });
};

const render = function () {
    renderError();
let bookmarks = [...store.bookmarks];
if (store.filter) {
    bookmarks = bookmarks.filter(bookmark => bookmark.rating >= store.filter);
};

const bookmarkString = generateBoookmarkString(bookmarks);

$('main').html(bookmarkString);
};

const generateAddBookmark = function () {
    return `
    <form class="js-creating-bookmark-form">
    <label for="NewBookmark">Title</label>
    <input type="text" id="addNewBookmark" name="title" required>
    <label for="desc">Description</label>
    <input type="text" id="desc" name="desc" required>
    <label for="link">Link:</label>
    <input type="url" id="link" name="url" required>
    <label for="rating">Rating:</label>
    <input type="number" min=1 max=5 id="rating" name="rating" required>
    <section class="buttons">
    <button type="submit" class="button submit">Submit</button>
    <button type="button" id="js-cancel" class="button">Cancel</button>
    </section>
    </form>`;
};

const getBookmarkIdFromElement = function (bookmark) {
    return $(bookmark)
    .closest('bookmark-element')
    .data('id');
}

const handleDelteBookmark = function () {
    $('main').on('click', 'bookmark-delete', event => {
        const id = getBookmarkIdFromElement(event.currentTarget);
    
        api.deleteBookmark(id)
          .then(() => {
            store.deleteBookmark(id);
            render();
          })
          .catch((error) => {
            store.setError(error.message);
            renderError();
          });
      });
};

const handleFilterBookmark = function () {}

const bindEventListeners = function () {
    handleDelteBookmark();
    handleFilterBookmark();
    handleCloseError();
    

}

//export default {
    //bindEventListeners,
    //render
