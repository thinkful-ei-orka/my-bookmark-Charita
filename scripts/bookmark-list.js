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

const generateBookmarkElement = function (bookmark) {}

const generateBookmarkString = function () {

}

const generateError = function (message) {}

const renderError = function () {}

const handleCloseError = function () {};

const render = function () {}

const generateAddBookmark = function () {}

const getBookmarkIdFromElement = function () {}

const handleDelteBookmark = function () {

}

const handleFilterBookmark = function () {}

const bindEventListeners = function () {
    handleDelteBookmark();
    handleFilterBookmark();
    

}

//export default {
    //bindEventListeners,
    //render
