import { ChangeEventHandler } from "react";
declare type ModelElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
declare function useModel<ME extends ModelElement>(initial?: string, onChange?: ChangeEventHandler<ME>): {
    model: {
        value: string;
        onChange: ChangeEventHandler<ME>;
    };
    setModel: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export default useModel;
