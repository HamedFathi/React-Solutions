import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
var IfNot = function (_a) {
    var condition = _a.condition, children = _a.children;
    return _jsx(_Fragment, { children: !condition && children }, void 0);
};
export default IfNot;
