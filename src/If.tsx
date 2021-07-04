import React from "react";

export const If: React.FC<{ condition: boolean | null | undefined }>
    = ({ condition, children }) => {
        return <>{condition && children}</>
    }