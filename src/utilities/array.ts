export function ensureArray(item: any) {
    if (arguments.length === 0) return [];
    if (arguments.length === 1) {
        if (item === undefined || item === null) return [];
        if (Array.isArray(item)) return item;
    }
    return Array.prototype.slice.call(arguments);
}

export const groupBy = <T, P>(list: T[], getKey: (item: T) => P): Array<Record<string, T[]>> => {
    const map = new Map();

    list.forEach((item: T) => {
        const property: P = getKey(item);
        const collection: T[] = map.get(property);

        if (!collection) {
            map.set(property, [item]);
        } else {
            collection.push(item);
        }
    });

    return Array.from(map).map((entry: [string, T[]]) => ({
        [entry[0]]: entry[1]
    }));
};