export const throttle = (cb: any, delay: number) => {
    let isThrottled = false;
    return (...args: any) => {
        if (isThrottled) return;
        isThrottled = true;
        cb(...args);
        setTimeout(() => {
            isThrottled = false;
        }, delay);
    };
};