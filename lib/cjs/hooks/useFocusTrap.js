"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
/*
<FocusTrap>
  <div role="dialog">
    <p>
      Here is a focus trap
      <a href="#">with</a>
      <a href="#">some</a>
      <a href="#">focusable</a>
      parts.
    </p>
    <p>
      <label htmlFor="focused-input" style={{ marginRight: '10px' }}>
        Initially focused input
      </label>
      <input id={'focused-input'} />
    </p>
    <p>
      <button>deactivate trap</button>
    </p>
  </div>
</FocusTrap>
*/
var KEYCODE_TAB = 9;
function useFocusTrap() {
    var elRef = react_1.useRef(null);
    function handleFocus(e) {
        if (elRef && elRef.current) {
            // @ts-ignore
            var focusableEls = elRef.current.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), firstFocusableEl = focusableEls[0], lastFocusableEl = focusableEls[focusableEls.length - 1];
            var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;
            if (!isTabPressed) {
                return;
            }
            if (e.shiftKey) {
                /* shift + tab */ if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } /* tab */
            else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        }
    }
    // @ts-ignore
    react_1.useEffect(function () {
        if (elRef && elRef.current) {
            // @ts-ignore
            elRef.current.addEventListener('keydown', handleFocus);
            return function (_) {
                // @ts-ignore
                elRef.current.removeEventListener('keydown', handleFocus);
            };
        }
    }, []);
    return elRef;
}
function FocusTrap(props) {
    var elRef = useFocusTrap();
    return (jsx_runtime_1.jsx("div", __assign({ className: 'trap', ref: elRef }, { children: props.children }), void 0));
}
exports.default = FocusTrap;
