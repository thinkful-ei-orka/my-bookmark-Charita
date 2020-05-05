import $ from 'jquery';

import 'normalize.css';
import './index.css';

import bookmarkList from './bookmark-list';
import store from './store';
import api from './api';

const main = function () {
  api.getBookmarks()
    .then((bookmarks) => {
      bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
      bookmarkList.render();
    });
  bookmarkList.bindEventListeners();
  bookmarkList.render();
};

$(main);