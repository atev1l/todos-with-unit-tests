import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteForm = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 850px;
  width: 100vw;
`;
export const TodoContainer = styled.div`
  overflow: hidden;
  max-height: 600px;
  min-height: 600px;
  overflow-y: scroll;
`;

export const Title = styled.div`
  font-size: 60px;
  text-align: center;
  font-weight: 300;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  padding: 20px 40px;
  box-shadow: 0 4px 4px #00000026;
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  font-size: 18px;
  &::before {
    content: '\u25BC'; 
    transform: translateY(-50%);
    color: #999; 
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const SettingsPanel = styled.div`
  border-top: 1px solid #e9e9e9;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tab = styled.div<{ border?: string, pad?: string }>`
  cursor: pointer;
  background: none;
  font-size: 16px;
  color: #838383;
  border: ${(props) => props.border === 'bd' ? '1px solid #feae7f' : 'none'};
  padding: ${(props) => props.pad === '15' ? '5px 10px' : '0'};
  margin: ${(props) => props.pad === '15' ? '1px 1px 1px 1px' : '0'};
  border-radius: 3px;
  box-sizing: border-box;
`;


export const TabsGroupContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  max-width: 240px;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
`;

