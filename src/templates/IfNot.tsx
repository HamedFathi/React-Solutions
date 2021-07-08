import * as React from "react";

const IfNot: React.FC<{ condition: boolean | null | undefined }>
    = ({ condition, children }) => {
        return <>{!condition && children}</>
    }

export default IfNot;