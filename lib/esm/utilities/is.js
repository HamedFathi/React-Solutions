export var isBrowser = typeof window !== 'undefined';
export var isDefined = function (val) { return typeof val !== 'undefined'; };
export var isBoolean = function (val) { return typeof val === 'boolean'; };
export var isFunction = function (val) { return typeof val === 'function'; };
export var isNumber = function (val) { return typeof val === 'number'; };
export var isString = function (val) { return typeof val === 'string'; };
export var isWindow = function (val) { return typeof window !== 'undefined' && toString.call(val) === '[object Window]'; };
export function isArray(value) {
    return Array.isArray(value);
}
export function isBase64(value) {
    var base64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
    return isString(value) && base64.test(value);
}
export function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
export function isDateValid(value) {
    return isDate(value) && !isNaN(value.getTime());
}
export function isError(value) {
    return (Object.prototype.toString.call(value) === '[object Error]' ||
        value instanceof Error);
}
export function isSymbol(value) {
    return typeof value === 'symbol';
}
export function isGuid(value) {
    var guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return isString(value) && guid.test(value);
}
export function isInfinity(value) {
    return value === Infinity || value === -Infinity;
}
export function isNull(value) {
    return value === null;
}
export function isObject(value) {
    return typeof value === 'object';
}
export function isPlainObject(value) {
    return (isObject(value) &&
        Object.prototype.toString.call(value) === '[object Object]');
}
export function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
export function isUndefined(value) {
    return typeof value === 'undefined';
}
export function isInstance(value, ctor) {
    return value instanceof ctor;
}
export var isURL = function (url) {
    try {
        new URL(url);
        return true;
    }
    catch (e) {
        return false;
    }
};
