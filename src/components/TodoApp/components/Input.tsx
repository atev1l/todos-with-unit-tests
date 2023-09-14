import React from 'react';
import {InputApp} from "../../../styles/TodoAppStyles";


type InputProps = {
    value: string;
    handleInputChange: (e: any) => void;
    keyEvent: (e: any) => void;
};

const Input: React.FC<InputProps> = React.memo(({ value, handleInputChange, keyEvent }) => {
    return (
        <>
            <label>
                <InputApp
                    type="text"
                    placeholder="What needs to be done?"
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={keyEvent}
                />
            </label>
        </>
    );
});

export default Input;
