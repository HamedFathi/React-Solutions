
export function notNullish<T>(v: T | null | undefined): v is NonNullable<T> {
  return v != null
}
export function noNull<T>(v: T | null): v is Exclude<T, null> {
  return v !== null
}
export function notUndefined<T>(v: T): v is Exclude<T, undefined> {
  return v !== undefined
}
export function isTruthy<T>(v: T): v is NonNullable<T> {
  return Boolean(v)
}
