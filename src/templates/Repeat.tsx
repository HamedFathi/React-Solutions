import * as React from "react";
// @ts-ignore
export const Repeat = ({ for: items = [], children }) => {
    const last = items.length - 1;
    return items.map((item, index) => {
        return React.cloneElement(children, {
            item,
            index,
            first: index === 0,
            last: index === last,
            even: index % 2 == 0,
            odd: index % 2 != 0
        });
    });
};