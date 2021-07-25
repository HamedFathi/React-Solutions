"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
<Repeat for={[1, 2, 3]}>
  {({ item, index }) => (
    <React.Fragment>
      <div>--- {item}</div>
      <Repeat for={[4, 5, 6]}>
        {({ item, index, length }) => (
          <>
            <div>------- {item}</div>
            <Repeat for={[7, 8, 9]}>
              {({ item, index, length, array }) => (
                <div>------------ {item}</div>
              )}
            </Repeat>
          </>
        )}
      </Repeat>
    </React.Fragment>
  )}
</Repeat>
*/
var Repeat = function (_a) {
    var _b = _a.for, items = _b === void 0 ? [] : _b, children = _a.children;
    var len = items.length;
    return items.map(function (item, index) {
        // @ts-ignore
        return children({
            item: item,
            index: index,
            len: len,
            items: items
        });
    });
};
exports.default = Repeat;
