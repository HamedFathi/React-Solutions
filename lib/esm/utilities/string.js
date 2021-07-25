var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
export var capitalize = function (_a) {
    var _b = __read(_a), first = _b[0], rest = _b.slice(1);
    return first.toUpperCase() + rest.map(function (letter) { return letter.toLowerCase(); }).join('');
};
export var toJSON = function (data) {
    try {
        return JSON.parse(data);
    }
    catch (err) {
        return;
    }
};
