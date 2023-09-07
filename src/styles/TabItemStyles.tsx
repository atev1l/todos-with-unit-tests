import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  padding: 20px 40px;
  
`;

export const Span = styled.div<{ line: string }>`
  margin-left: 15px;
  text-decoration: ${(props) => props.line};
  display: flex;
  align-items: center;
  color: ${(props) => props.line === 'line-through' ? '#838383' : 'black'};
`;
