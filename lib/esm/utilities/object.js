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
export function hasOwnProperty(obj, v) {
    if (obj == null)
        return false;
    return Object.prototype.hasOwnProperty.call(obj, v);
}
export function objectKeys(obj) {
    return Object.keys(obj);
}
export function objectEntries(obj) {
    return Object.entries(obj);
}
export function isKeyOf(obj, k) {
    return k in obj;
}
export function clearUndefined(obj) {
    Object.keys(obj).forEach(function (key) { return (obj[key] === undefined ? delete obj[key] : {}); });
    return obj;
}
export var deepFreeze = function (obj) {
    var e_1, _a;
    var propNames = Object.getOwnPropertyNames(obj);
    try {
        for (var propNames_1 = __values(propNames), propNames_1_1 = propNames_1.next(); !propNames_1_1.done; propNames_1_1 = propNames_1.next()) {
            var name_1 = propNames_1_1.value;
            var value = obj[name_1];
            if (value && typeof value === 'object') {
                deepFreeze(value);
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
export var stringify = function (data, space) {
    if (space === void 0) { space = undefined; }
    try {
        return JSON.stringify(data, null, space);
    }
    catch (err) {
        return;
    }
};
