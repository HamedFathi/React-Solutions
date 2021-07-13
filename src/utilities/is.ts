export const isBrowser = typeof window !== 'undefined'
export const isDefined = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isWindow = (val: any): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]'
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}
export function isBase64(value: any): value is string {
    const base64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

    return isString(value) && base64.test(value);
}
export function isDate(value: any): value is Date {
    return Object.prototype.toString.call(value) === '[object Date]';
}
export function isDateValid(value: any): value is Date {
    return isDate(value) && !isNaN(value.getTime());
}
export function isError(value: any): value is Error {
    return (
        Object.prototype.toString.call(value) === '[object Error]' ||
        value instanceof Error
    );
}
export function isSymbol(value: any): value is symbol {
    return typeof value === 'symbol';
}
export function isGuid(value: any): value is string {
    const guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    return isString(value) && guid.test(value);
}
export function isInfinity(value: any): value is number {
    return value === Infinity || value === -Infinity;
}
export function isNull(value: any): value is null {
    return value === null;
}
export function isObject(value: any): value is object {
    return typeof value === 'object';
}
export function isPlainObject(value: any): value is object {
    return (
        isObject(value) &&
        Object.prototype.toString.call(value) === '[object Object]'
    );
}
export function isRegExp(value: any): value is RegExp {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
export function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined';
}
export function isInstance<T extends new (...args: any[]) => any>(
    value: any,
    ctor: T
): value is InstanceType<T> {
    return value instanceof ctor;
}






















