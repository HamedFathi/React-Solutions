import * as React from "react";

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
const Repeat: React.FC<{ for: any }> = ({ for: items = [], children }) => {
    const len = items.length;
    return items.map((item: any, index: any) => {
        // @ts-ignore
        return children({
            item,
            index,
            len,
            items
        });
    });
};

export default Repeat;