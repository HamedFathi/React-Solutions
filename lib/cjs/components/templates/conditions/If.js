"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var If = function (_a) {
    var condition = _a.condition, children = _a.children;
    return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: condition && children }, void 0);
};
exports.default = If;
