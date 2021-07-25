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
  const [term, setTerm] = useState('');
  useDebounce(()=> {
    console.log(term); // debounced 1sec
    // call search api ...
    // return () => maybe cancel prev req
  }, 1000 ,[term]);
*/
export function useDebounce(callback, delay, deps) {
    if (deps === void 0) { deps = []; }
    var data = React.useRef({ firstTime: true });
    React.useEffect(function () {
        // @ts-ignore
        var _a = data.current, firstTime = _a.firstTime, clearFunc = _a.clearFunc;
        if (firstTime) {
            data.current.firstTime = false;
            return;
        }
        var handler = setTimeout(function () {
            if (clearFunc && typeof clearFunc === 'function') {
                clearFunc();
            }
            // @ts-ignore
            data.current.clearFunc = callback();
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, __spreadArray([delay], __read(deps)));
}
export default useDebounce;
