export function ensureArray(item: any) {
    if (arguments.length === 0) return [];
    if (arguments.length === 1) {
        if (item === undefined || item === null) return [];
        if (Array.isArray(item)) return item;
    }
    return Array.prototype.slice.call(arguments);
}