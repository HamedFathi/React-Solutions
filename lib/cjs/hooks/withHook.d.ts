/// <reference types="react" />
declare type TReturnType<T1> = (props: T1) => React.ReactNode;
export declare const withHook: <T1, T2>(hook: (p: T1) => T2, view: (p: T2) => React.ReactNode) => TReturnType<T1>;
export {};
