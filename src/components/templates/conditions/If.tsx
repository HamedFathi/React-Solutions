import * as React from "react";

const If: React.FC<{ condition: boolean | null | undefined }>
    = ({ condition, children }) => {
        return <>{condition && children}</>
    }
export default If;