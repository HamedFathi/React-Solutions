"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = exports.$$ = void 0;
var $$ = function (selector, callback) {
    var elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) {
        return;
    }
    elements.forEach(callback);
};
exports.$$ = $$;
var $ = function (selector) { return document.querySelector(selector); };
exports.$ = $;
