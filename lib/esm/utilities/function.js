export function batchInvoke(functions) {
    functions.forEach(function (fn) { return fn && fn(); });
}
export function invoke(func) {
    return func();
}
