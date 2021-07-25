"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useModel(initial, onChange) {
    if (initial === void 0) { initial = ""; }
    var _a = __read(react_1.useState(initial), 2), value = _a[0], setValue = _a[1];
    var handler = function (e) {
        // Store the current value and run the callback function if provided
        setValue(e.currentTarget.value);
        onChange && onChange(e);
    };
    var model = { value: value, onChange: handler };
    return { model: model, setModel: setValue };
}
exports.default = useModel;
