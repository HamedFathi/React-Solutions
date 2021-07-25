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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
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
export default function Promise(_a) {
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
    return (_jsxs(_Fragment, { children: [pending && children[0], !pending && data && (_jsx(ResolveComponent, { data: data, children: ResolveChild }, void 0)), !pending && error && (_jsx(RejectComponent, { error: error, children: RejectChild }, void 0))] }, void 0));
}
