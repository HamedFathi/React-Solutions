"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
/*
<Promise on={fetchTodo}>
  <Pending>
    <h1>Loading...</h1>
  </Pending>
  <Resolve>
    {(data) => {
      return (
        <div>
          <h1>Data Received</h1>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
      );
    }}
  </Resolve>
  <Reject>
    {(error) => {
      return (
        <div>
          <h1>Error Generated</h1>
          <pre>{JSON.stringify(error, null, 4)}</pre>
        </div>
      );
    }}
  </Reject>
</Promise>
*/
// @ts-ignore
function Promise(_a) {
    var on = _a.on, children = _a.children;
    var _b = __read(React.useState(true), 2), pending = _b[0], setPending = _b[1];
    var _c = __read(React.useState(null), 2), data = _c[0], setData = _c[1];
    var _d = __read(React.useState(null), 2), error = _d[0], setError = _d[1];
    React.useEffect(function () {
        on()
            .then(function (data) { return setData(data); })
            .catch(function (error) { return setError(error); })
            .finally(function () { return setPending(false); });
    }, [on]);
    var _e = children[1], ResolveComponent = _e.type, ResolveChild = _e.props.children;
    var _f = children[2], RejectComponent = _f.type, RejectChild = _f.props.children;
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [pending && children[0], !pending && data && (jsx_runtime_1.jsx(ResolveComponent, { data: data, children: ResolveChild }, void 0)), !pending && error && (jsx_runtime_1.jsx(RejectComponent, { error: error, children: RejectChild }, void 0))] }, void 0));
}
exports.default = Promise;
