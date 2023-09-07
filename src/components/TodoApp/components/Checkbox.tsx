import React from 'react';
import {CheckboxContainer, HiddenCheckbox, CustomCheckbox, Arrow} from '../../../styles/Checkbox'


interface CheckboxProps {
    isChecked: boolean;
    handleCheckboxChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, handleCheckboxChange }) => {
    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            <CustomCheckbox checked={isChecked} />
            <Arrow checked={isChecked} />
        </CheckboxContainer>
    );
};

export default Checkbox;
