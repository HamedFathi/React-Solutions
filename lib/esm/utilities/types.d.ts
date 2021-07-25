export declare type Func<T = void> = () => T;
export declare type Awaitable<T> = T | PromiseLike<T>;
export declare type Nullable<T> = T | null | undefined;
export declare type Arrayable<T> = T | Array<T>;
export declare type Constructor<T = void> = new (...args: any[]) => T;
export declare type ElementOf<T> = T extends (infer E)[] ? E : never;
