import * as React from "react";

export const IfNot: React.FC<{ condition: boolean | null | undefined }>
    = ({ condition, children }) => {
        return <>{!condition && children}</>
    }