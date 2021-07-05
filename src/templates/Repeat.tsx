import * as React from "react";
import { ensureArray } from "utils";

/*
let i = 0;
<Repeat for={[1, 2, 3, 4, 5]}>
  {(value: any, index: any, array: any) => (
    <>
      <div style={{color:'red'}} key={i++}>This is item {value} in the list</div>
      <Repeat for={[7, 8]}>
        {(val: any, idx: any, arr: any) => (
          <div style={{color:'blue'}} key={i++}>This is item {val} in the list</div>
        )}
      </Repeat>
    </>
  )}
</Repeat>
*/

// @ts-ignore
export const Repeat = ({ for: items = [] as any[], children: render }) => {
    items = ensureArray(items);
    if (typeof render !== 'function') {
        // @ts-ignore
        render = (value: any) => null;
    }
    return (
        <>
            {items.map((value: any, index: any, array: any) => render(value, index, array))}
        </>
    );
};

