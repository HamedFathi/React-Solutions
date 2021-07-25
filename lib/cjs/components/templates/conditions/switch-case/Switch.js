"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var Switch = function (_a) {
    var on = _a.on, children = _a.children;
    if (!children) {
        throw new Error('<Switch/> requires at least one <Case/> child component');
    }
    var arrChildren = Array.isArray(children) ? children : [children];
    var badChild = arrChildren.find(function (child) { return !['Case', 'Default'].includes(child.type.name); });
    if (badChild) {
        throw new Error("<Switch /> must only contain <Case/> children. Please wrap <" + badChild.type + "/> in a <Case/>");
    }
    var firstMatch = arrChildren.find(function (child) {
        var value = child.props.value;
        if (Array.isArray(value))
            return value.includes(on);
        return value === on;
    });
    if (firstMatch)
        return firstMatch;
    var defaultComp = arrChildren.find(function (child) { return child.type.name === 'Default'; });
    return defaultComp || null;
};
exports.default = Switch;
