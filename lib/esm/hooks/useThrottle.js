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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import * as React from "react";
/*
const [count, setCount] = useState(0);
useThrottle(() => { console.log(count); }, 1000, [count]);
*/
export var useThrottle = function (callback, delay, deps) {
    if (deps === void 0) { deps = []; }
    var lastRan = React.useRef(Date.now());
    React.useEffect(function () {
        var handler = setTimeout(function () {
            if (Date.now() - lastRan.current >= delay) {
                callback();
                lastRan.current = Date.now();
            }
        }, delay - (Date.now() - lastRan.current));
        return function () {
            clearTimeout(handler);
        };
    }, __spreadArray([delay], __read(deps)));
};
export default useThrottle;
