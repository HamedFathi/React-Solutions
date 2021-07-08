import * as React from "react";

/*
const [count, setCount] = useState(0);
useThrottle(() => { console.log(count); }, 1000, [count]);
*/

export const useThrottle = (callback: () => void, delay: number, deps = []) => {
    const lastRan = React.useRef(Date.now());
    React.useEffect(
        () => {
            const handler = setTimeout(function () {
                if (Date.now() - lastRan.current >= delay) {
                    callback();
                    lastRan.current = Date.now();
                }
            }, delay - (Date.now() - lastRan.current));

            return () => {
                clearTimeout(handler);
            };
        },
        [delay, ...deps],
    );
};

export default useThrottle;

