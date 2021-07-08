import * as React from "react";

const Hide: React.FC<{ condition: boolean | null | undefined, tag: string | undefined | null }>
    = ({ condition, tag, children }) => {
        return (
            <> {!condition ?
                React.createElement(tag || 'span', { style: { display: "visible" } }, children)
                : React.createElement(tag || 'span', { style: { display: "none" } }, children)
            }
            </>
        )
    }

export default Hide;