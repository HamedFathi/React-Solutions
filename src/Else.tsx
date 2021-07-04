import React from "react"

export const Else: React.FC<{ condition: boolean | null | undefined }>
    = ({ condition, children }) => {
        return <>{!condition && children}</>
    }