export declare function ensureArray(item: any): any[];
export declare const groupBy: <T, P>(list: T[], getKey: (item: T) => P) => Record<string, T[]>[];
