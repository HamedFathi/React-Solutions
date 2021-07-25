import { Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
var Hide = function (_a) {
    var condition = _a.condition, tag = _a.tag, children = _a.children;
    return (_jsxs(_Fragment, { children: [" ", !condition ?
                React.createElement(tag || 'span', { style: { display: "visible" } }, children)
                : React.createElement(tag || 'span', { style: { display: "none" } }, children)] }, void 0));
};
export default Hide;
