"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prop_types_1 = require("prop-types");
// @ts-ignore
var TryCatch = function (_a) {
    var render = _a.try, fallBack = _a.catch;
    try {
        return render();
    }
    catch (e) {
        return fallBack(e);
    }
};
TryCatch.propTypes = {
    try: prop_types_1.func,
    catch: prop_types_1.func,
};
TryCatch.defaultProps = {
    try: null,
    catch: function (e) {
        throw new Error(e);
    },
};
exports.default = TryCatch;
