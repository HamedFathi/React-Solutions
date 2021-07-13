import { Func } from "./types"

export function sleep(ms: number, callback?: Func<any>) {
  return new Promise<void>(resolve =>
    setTimeout(async () => {
      await callback?.()
      resolve()
    }, ms),
  )
}
