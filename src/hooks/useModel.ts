import { ChangeEventHandler, useState } from "react";


/*
    function App() {
    // Use custom hook
    const { model, setModel } = useModel("John", e => {
        console.log("Model changed", e.currentTarget.value);
    });

    const reset = () => setModel("");

    return (
        <React.Fragment>
        // Spread the model on the input element
        <label htmlFor="name">Name: </label>
        <input id="name" {...model} />
        <div>Hello {model.value}</div>
        <button onClick={reset}>Reset</button>
        </React.Fragment>
    );
    }
    render(<App />, document.getElementById("root"));
*/

type ModelElement =
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement;

function useModel<ME extends ModelElement>(
    initial: string = "",
    onChange?: ChangeEventHandler<ME>
) {
    const [value, setValue] = useState<string>(initial);
    const handler: ChangeEventHandler<ME> = e => {
        // Store the current value and run the callback function if provided
        setValue(e.currentTarget.value);
        onChange && onChange(e);
    };

    const model = { value, onChange: handler };
    return { model, setModel: setValue };
}

export default useModel;