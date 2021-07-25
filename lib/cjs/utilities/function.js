"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoke = exports.batchInvoke = void 0;
function batchInvoke(functions) {
    functions.forEach(function (fn) { return fn && fn(); });
}
exports.batchInvoke = batchInvoke;
function invoke(func) {
    return func();
}
exports.invoke = invoke;
