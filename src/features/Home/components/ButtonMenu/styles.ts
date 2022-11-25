import styled from 'styled-components';

type PropsButton = {
  important: boolean;
};

export const ButtonContainer = styled.div<PropsButton>`
  width: 45%;
  min-height: 50px;
  margin: 2% 1%;
  background-color: ${({ important, theme }) =>
    important ? theme.colors.red : theme.colors.blue};
  color: white;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
  box-shadow: inset 10px -33px 40px -17px rgba(0, 0, 0, 0.1);
  :hover {
    outline: none !important;
    border-color: 2px solid #719ece;
    box-shadow: 0 0 10px #719ece;
  }
  :active {
    transform: translateY(-4px);
  }
`;
