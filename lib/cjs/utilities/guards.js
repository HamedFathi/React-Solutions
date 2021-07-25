"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTruthy = exports.notUndefined = exports.noNull = exports.notNullish = void 0;
function notNullish(v) {
    return v != null;
}
exports.notNullish = notNullish;
function noNull(v) {
    return v !== null;
}
exports.noNull = noNull;
function notUndefined(v) {
    return v !== undefined;
}
exports.notUndefined = notUndefined;
function isTruthy(v) {
    return Boolean(v);
}
exports.isTruthy = isTruthy;
