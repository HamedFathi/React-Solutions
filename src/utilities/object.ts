export function hasOwnProperty<T>(obj: T, v: PropertyKey) {
    if (obj == null) return false
    return Object.prototype.hasOwnProperty.call(obj, v)
}
export function objectKeys<T extends object>(obj: T) {
    return Object.keys(obj) as Array<keyof T>
}
export function objectEntries<T extends object>(obj: T) {
    return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}
export function isKeyOf<T extends object>(obj: T, k: keyof any): k is keyof T {
    return k in obj
}
export function clearUndefined<T extends object>(obj: T): T {
    // @ts-expect-error
    Object.keys(obj).forEach((key: string) => (obj[key] === undefined ? delete obj[key] : {}))
    return obj
}
export const deepFreeze = <T extends Record<string, any>>(obj: T): T => {
    const propNames: string[] = Object.getOwnPropertyNames(obj);

    for (const name of propNames) {
        const value = obj[name];

        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    }

    return Object.freeze(obj);
};

export const stringify = (data: object, space: string | number | undefined = undefined): string | void => {
    try {
        return JSON.stringify(data, null, space);
    } catch (err) {
        return;
    }
};