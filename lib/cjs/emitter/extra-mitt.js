"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
function mitt(all) {
    all = all || new Map();
    return {
        /**
         * A Map of event names to registered handler functions.
         */
        all: all,
        /**
         * Register an event handler for the given type.
         * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
         * @param {Function} handler Function to call in response to given event
         * @memberOf mitt
         */
        on: function (type, handler) {
            var handlers = all.get(type);
            if (handlers) {
                handlers.push(handler);
            }
            else {
                all.set(type, [handler]);
            }
        },
        /**
         * Remove an event handler for the given type.
         * If `handler` is omitted, all handlers of the given type are removed.
         * @param {string|symbol} type Type of event to unregister `handler` from, or `'*'`
         * @param {Function} [handler] Handler function to remove
         * @memberOf mitt
         */
        off: function (type, handler) {
            var handlers = all.get(type);
            if (handlers) {
                if (handler) {
                    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
                }
                else {
                    all.set(type, []);
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
        emit: function (type, evt) {
            var handlers = all.get(type);
            if (handlers) {
                handlers
                    .slice()
                    .map(function (handler) {
                    handler(evt);
                });
            }
            handlers = all.get('*');
            if (handlers) {
                handlers
                    .slice()
                    .map(function (handler) {
                    handler(type, evt);
                });
            }
        }
    };
}
exports.default = mitt;
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
