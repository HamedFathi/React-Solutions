import * as React from "react";

const Else: React.FC<{ condition: boolean | null | undefined }>
    = ({ condition, children }) => {
        return <>{!condition && children}</>
    }

export default Else;