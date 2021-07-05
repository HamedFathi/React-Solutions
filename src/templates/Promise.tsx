import * as React from "react";

const Promise: React.FC<{ on: Promise<any> }>
    = ({ on, children }) => {
        return <>{children}</>
    }
const Rejected: React.FC<{ on: any }>
    = ({ on, children }) => {
        return <>{children}</>
    }
const Pending: React.FC<{ on: any }>
    = ({ on, children }) => {
        return <>{children}</>
    }
const Resolved: React.FC<{ on: any }>
    = ({ on, children }) => {
        return <>{children}</>
    }

/*
<Promise on={myFunc}>
    <Pending>
        ...
    </Pending>        
    <Resolved>
        {(data: any) => ( ... )}
    </Resolved> 
    <Rejected>
        {(err: any) => ( ... )}
    </Rejected>      
</Promise>
*/