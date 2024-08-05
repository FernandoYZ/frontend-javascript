import $ from '../../libs/jquery.min.js';

function addClass(selector, className) {
    $(selector).addClass(className);
}

function removeClass(selector, className) {
    $(selector).removeClass(className);
}

function toggleClass(selector, className) {
    $(selector).toggleClass(className);
}

export { addClass, removeClass, toggleClass };
