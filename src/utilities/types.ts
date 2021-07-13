export type Func<T = void> = () => T;

export type Awaitable<T> = T | PromiseLike<T>;

export type Nullable<T> = T | null | undefined;

export type Arrayable<T> = T | Array<T>;

export type Constructor<T = void> = new (...args: any[]) => T;

export type ElementOf<T> = T extends (infer E)[] ? E : never;