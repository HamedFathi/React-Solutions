export declare function notNullish<T>(v: T | null | undefined): v is NonNullable<T>;
export declare function noNull<T>(v: T | null): v is Exclude<T, null>;
export declare function notUndefined<T>(v: T): v is Exclude<T, undefined>;
export declare function isTruthy<T>(v: T): v is NonNullable<T>;
