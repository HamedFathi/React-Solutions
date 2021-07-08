import * as React from "react";

/*
  const [term, setTerm] = useState('');
  useDebounce(()=> {
    console.log(term); // debounced 1sec
    // call search api ...
    // return () => maybe cancel prev req 
  }, 1000 ,[term]);
*/

export function useDebounce(callback: any, delay: number, deps = []) {
    const data = React.useRef({ firstTime: true });
    React.useEffect(() => {
        // @ts-ignore
        const { firstTime, clearFunc } = data.current;

        if (firstTime) {
            data.current.firstTime = false;
            return;
        }

        const handler = setTimeout(() => {
            if (clearFunc && typeof clearFunc === 'function') {
                clearFunc();
            }
            // @ts-ignore
            data.current.clearFunc = callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    },
        [delay, ...deps],
    );
}

export default useDebounce;