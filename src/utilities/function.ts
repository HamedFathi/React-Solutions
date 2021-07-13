import { Func, Nullable } from './types'

export function batchInvoke(functions: Nullable<Func>[]) {
  functions.forEach(fn => fn && fn())
}
export function invoke(func: Func) {
  return func()
}