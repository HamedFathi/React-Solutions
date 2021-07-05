import * as React from "react";
import { ensureArray } from "utils";

/*
function App() {
  let i = 0;
  return (
    <div className="App">
      <Repeat for={[1, 2, 3, 4, 5]}>
        {(value: any, index: any, array: any, len: any) => (
          <>
            <div key={i++}>{len}</div>
            <div style={{ color: 'red' }} key={i++}>This is item {value} in the list</div>
            <Repeat for={[7, 8]}>
              {(v: any, inx: any, ar: any, l: any) => (
                <>
                  <div key={i++}>{l}</div>
                  <div style={{ color: 'blue' }} key={i++}>This is item {v} in the list</div>
                </>
              )}
            </Repeat>
          </>
        )}
      </Repeat>
    </div>
  );
}
*/

// @ts-ignore
export const Repeat = ({ for: items = [] as any[], children: render }) => {
  items = ensureArray(items);
  if (typeof render !== 'function') {
    render = (_value: any) => null;
  }
  const length = items.length;
  return (
    <>
      {items.map((value: any, index: any, array: any) => render(value, index, array, length))}
    </>
  );
};

