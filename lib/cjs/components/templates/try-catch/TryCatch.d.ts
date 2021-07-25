declare const TryCatch: {
    ({ try: render, catch: fallBack }: {
        try: any;
        catch: any;
    }): any;
    propTypes: {
        try: import("prop-types").Requireable<(...args: any[]) => any>;
        catch: import("prop-types").Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        try: null;
        catch: (e: string | undefined) => never;
    };
};
export default TryCatch;
