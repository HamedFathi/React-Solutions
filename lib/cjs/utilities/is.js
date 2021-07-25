"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isURL = exports.isInstance = exports.isUndefined = exports.isRegExp = exports.isPlainObject = exports.isObject = exports.isNull = exports.isInfinity = exports.isGuid = exports.isSymbol = exports.isError = exports.isDateValid = exports.isDate = exports.isBase64 = exports.isArray = exports.isWindow = exports.isString = exports.isNumber = exports.isFunction = exports.isBoolean = exports.isDefined = exports.isBrowser = void 0;
exports.isBrowser = typeof window !== 'undefined';
var isDefined = function (val) { return typeof val !== 'undefined'; };
exports.isDefined = isDefined;
var isBoolean = function (val) { return typeof val === 'boolean'; };
exports.isBoolean = isBoolean;
var isFunction = function (val) { return typeof val === 'function'; };
exports.isFunction = isFunction;
var isNumber = function (val) { return typeof val === 'number'; };
exports.isNumber = isNumber;
var isString = function (val) { return typeof val === 'string'; };
exports.isString = isString;
var isWindow = function (val) { return typeof window !== 'undefined' && toString.call(val) === '[object Window]'; };
exports.isWindow = isWindow;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function isBase64(value) {
    var base64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
    return exports.isString(value) && base64.test(value);
}
exports.isBase64 = isBase64;
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
exports.isDate = isDate;
function isDateValid(value) {
    return isDate(value) && !isNaN(value.getTime());
}
exports.isDateValid = isDateValid;
function isError(value) {
    return (Object.prototype.toString.call(value) === '[object Error]' ||
        value instanceof Error);
}
exports.isError = isError;
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
function isGuid(value) {
    var guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return exports.isString(value) && guid.test(value);
}
exports.isGuid = isGuid;
function isInfinity(value) {
    return value === Infinity || value === -Infinity;
}
exports.isInfinity = isInfinity;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isObject(value) {
    return typeof value === 'object';
}
exports.isObject = isObject;
function isPlainObject(value) {
    return (isObject(value) &&
        Object.prototype.toString.call(value) === '[object Object]');
}
exports.isPlainObject = isPlainObject;
function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isInstance(value, ctor) {
    return value instanceof ctor;
}
exports.isInstance = isInstance;
var isURL = function (url) {
    try {
        new URL(url);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isURL = isURL;
