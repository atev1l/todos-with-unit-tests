import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Arrow = styled.div<{ checked: boolean }>`
  content: "";
  position: relative;
  left: -20px;
  top: -2px;
  width: 9px;
  height: 18px;
  border: solid #27c1a0;
  border-width: 0 1px 1px 0;
  transform: rotate(35deg);
  opacity: ${(props) => (props.checked ? '1' : '0')};
`;

export const CustomCheckbox = styled.div<{ checked: boolean }>`
  border-radius: 9999px;
  width: 30px;
  height: 30px;
  border: ${(props) => (props.checked ? '1px solid #27c1a0' : '1px solid #afafaf')};
  transition: background-color 0.2s ease-in-out;
`;
