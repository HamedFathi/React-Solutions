export var $$ = function (selector, callback) {
    var elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) {
        return;
    }
    elements.forEach(callback);
};
export var $ = function (selector) { return document.querySelector(selector); };
