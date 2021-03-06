export type EventType = string | symbol;

// An event handler can take an optional event argument
// and should not return a value
export type Handler<T = unknown> = (event: T) => void;
export type WildcardHandler<T = Record<string, unknown>> = (
	type: keyof T,
	event: T[keyof T]
) => void;

// An array of all currently registered event handlers for a type
export type EventHandlerList<T = unknown> = Array<Handler<T>>;
export type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>;

// A map of event types and their corresponding event handlers.
export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
	keyof Events | '*',
	EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>
>;

export interface Emitter<Events extends Record<EventType, unknown>> {
	all: EventHandlerMap<Events>;

	on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
	on(type: '*', handler: WildcardHandler<Events>): void;

	off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
	off(type: '*', handler: WildcardHandler<Events>): void;

	emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
	emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;
}

/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
export default function mitt<Events extends Record<EventType, unknown>>(
	all?: EventHandlerMap<Events>
): Emitter<Events> {
	type GenericEventHandler =
		| Handler<Events[keyof Events]>
		| WildcardHandler<Events>;
	all = all || new Map();

	return {

		/**
		 * A Map of event names to registered handler functions.
		 */
		all,

		/**
		 * Register an event handler for the given type.
		 * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
		 * @param {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on<Key extends keyof Events>(type: Key, handler: GenericEventHandler) {
			const handlers: Array<GenericEventHandler> | undefined = all!.get(type);
			if (handlers) {
				handlers.push(handler);
			}
			else {
				all!.set(type, [handler] as EventHandlerList<Events[keyof Events]>);
			}
		},

		/**
		 * Remove an event handler for the given type.
		 * If `handler` is omitted, all handlers of the given type are removed.
		 * @param {string|symbol} type Type of event to unregister `handler` from, or `'*'`
		 * @param {Function} [handler] Handler function to remove
		 * @memberOf mitt
		 */
		off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler) {
			const handlers: Array<GenericEventHandler> | undefined = all!.get(type);
			if (handlers) {
				if (handler) {
					handlers.splice(handlers.indexOf(handler) >>> 0, 1);
				}
				else {
					all!.set(type, []);
				}
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `'*'` handlers are invoked after type-matched handlers.
		 *
		 * Note: Manually firing '*' handlers is not supported.
		 *
		 * @param {string|symbol} type The event type to invoke
		 * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit<Key extends keyof Events>(type: Key, evt?: Events[Key]) {
			let handlers = all!.get(type);
			if (handlers) {
				(handlers as EventHandlerList<Events[keyof Events]>)
					.slice()
					.map((handler) => {
						handler(evt!);
					});
			}

			handlers = all!.get('*');
			if (handlers) {
				(handlers as WildCardEventHandlerList<Events>)
					.slice()
					.map((handler) => {
						handler(type, evt!);
					});
			}
		}
	};
}

/*
import mitt from 'mitt';

export function mittAsync(all) {
  const inst = mitt(all);
  inst.emitAsync = emitAsync;
  return inst;
}

async function emitAsync(type, e) {
  let handlers = this.all.get(type);
  if (handlers) for (const f of handlers) await f(e);
  let handlers = this.all.get('*');
  if (handlers) for (const f of handlers) await f(type, e);
}

// usage:
const events = mittWithAsync();
events.on('get', async url => fetch(url).then(r=>r.json()));
await events.emit('get', '/foo.json');

*****************************************************************

function mittWithOnce(all) {
  const inst = mitt(all);
  inst.once = (type, fn) => {
    inst.on(type, fn);
    inst.on(type, inst.off.bind(inst, type, fn));
  };
  return inst;
}

const { once, off, emit } = mitt();

on('foo', foo);  // register a normal handler
once('foo', foo);  // ... and a "once" handler

off('foo', foo);  // question: which does this remove? the "once" handler, or the normal handler?

emit('foo');  // correct - in either case we see one foo() invocation here

emit('foo');  // ... but whether this invokes foo() depends on which handler got removed

*/