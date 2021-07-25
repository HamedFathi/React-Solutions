"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = exports.ensureArray = void 0;
function ensureArray(item) {
    if (arguments.length === 0)
        return [];
    if (arguments.length === 1) {
        if (item === undefined || item === null)
            return [];
        if (Array.isArray(item))
            return item;
    }
    return Array.prototype.slice.call(arguments);
}
exports.ensureArray = ensureArray;
var groupBy = function (list, getKey) {
    var map = new Map();
    list.forEach(function (item) {
        var property = getKey(item);
        var collection = map.get(property);
        if (!collection) {
            map.set(property, [item]);
        }
        else {
            collection.push(item);
        }
    });
    return Array.from(map).map(function (entry) {
        var _a;
        return (_a = {},
            _a[entry[0]] = entry[1],
            _a);
    });
};
exports.groupBy = groupBy;
