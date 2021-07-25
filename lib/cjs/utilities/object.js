"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.deepFreeze = exports.clearUndefined = exports.isKeyOf = exports.objectEntries = exports.objectKeys = exports.hasOwnProperty = void 0;
function hasOwnProperty(obj, v) {
    if (obj == null)
        return false;
    return Object.prototype.hasOwnProperty.call(obj, v);
}
exports.hasOwnProperty = hasOwnProperty;
function objectKeys(obj) {
    return Object.keys(obj);
}
exports.objectKeys = objectKeys;
function objectEntries(obj) {
    return Object.entries(obj);
}
exports.objectEntries = objectEntries;
function isKeyOf(obj, k) {
    return k in obj;
}
exports.isKeyOf = isKeyOf;
function clearUndefined(obj) {
    Object.keys(obj).forEach(function (key) { return (obj[key] === undefined ? delete obj[key] : {}); });
    return obj;
}
exports.clearUndefined = clearUndefined;
var deepFreeze = function (obj) {
    var e_1, _a;
    var propNames = Object.getOwnPropertyNames(obj);
    try {
        for (var propNames_1 = __values(propNames), propNames_1_1 = propNames_1.next(); !propNames_1_1.done; propNames_1_1 = propNames_1.next()) {
            var name_1 = propNames_1_1.value;
            var value = obj[name_1];
            if (value && typeof value === 'object') {
                exports.deepFreeze(value);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propNames_1_1 && !propNames_1_1.done && (_a = propNames_1.return)) _a.call(propNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Object.freeze(obj);
};
exports.deepFreeze = deepFreeze;
var stringify = function (data, space) {
    if (space === void 0) { space = undefined; }
    try {
        return JSON.stringify(data, null, space);
    }
    catch (err) {
        return;
    }
};
exports.stringify = stringify;
