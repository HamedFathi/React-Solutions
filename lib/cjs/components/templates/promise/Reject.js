"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function Reject(_a) {
    var error = _a.error, children = _a.children;
    return children(error);
}
exports.default = Reject;
