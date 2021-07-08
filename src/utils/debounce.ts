export const debounce = (cb: any, delay: number) => {
    let isDebounced: any = null;
    return (...args: any) => {
        clearTimeout(isDebounced);
        isDebounced = setTimeout(() => cb(...args), delay);
    };
};

