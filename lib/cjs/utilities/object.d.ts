export declare function hasOwnProperty<T>(obj: T, v: PropertyKey): boolean;
export declare function objectKeys<T extends object>(obj: T): (keyof T)[];
export declare function objectEntries<T extends object>(obj: T): [keyof T, T[keyof T]][];
export declare function isKeyOf<T extends object>(obj: T, k: keyof any): k is keyof T;
export declare function clearUndefined<T extends object>(obj: T): T;
export declare const deepFreeze: <T extends Record<string, any>>(obj: T) => T;
export declare const stringify: (data: object, space?: string | number | undefined) => string | void;
