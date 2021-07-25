import { useRef, useEffect } from 'react';

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

const KEYCODE_TAB = 9;

function useFocusTrap() {
    const elRef = useRef(null);

    function handleFocus(e: any) {
        if (elRef && elRef.current) {
            // @ts-ignore
            var focusableEls = elRef.current.querySelectorAll(
                'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
            ),
                firstFocusableEl = focusableEls[0],
                lastFocusableEl = focusableEls[focusableEls.length - 1];

            var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) {
          /* shift + tab */ if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } /* tab */ else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }

        }
    }

    // @ts-ignore
    useEffect(() => {
        if (elRef && elRef.current) {
            // @ts-ignore
            elRef.current.addEventListener('keydown', handleFocus);
            return (_: any) => {
                // @ts-ignore
                elRef.current.removeEventListener('keydown', handleFocus);
            };
        }
    }, []);

    return elRef;
}

export default function FocusTrap(props: any) {
    const elRef = useFocusTrap();

    return (
        <div className={'trap'} ref={elRef}>
            {props.children}
        </div>
    );
}