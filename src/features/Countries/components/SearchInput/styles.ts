import styled from 'styled-components';

export const Inputtext = styled.input`
  width: 100%;
  height: 20px;
  padding: 10px 40px;
  border-radius: 50px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.mainBlue};
  ::placeholder {
    color: ${({ theme }) => theme.colors.mainBlue};
    font-size: 12px;
  }
`;
export const Label = styled.div`
  user-select: none;
  position: absolute;
  display: flex;
  height: 15px;
  background-color: white;
  margin: -10px 0px 0px 5px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;
  border-radius: 5px;
  padding: 0px 10px;
  z-index: 1;
`;

type PropsContainer = {
  whitdU: string;
};

export const ContainerInput = styled.div<PropsContainer>`
  width: ${({ whitdU }) => whitdU};
  border-radius: 50px;
  margin: 10px auto;
  display: flex;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  :hover {
    > ${Inputtext} {
      border: 1px solid green;
    }
    > ${Label} {
      color: green;
    }
  }
  :focus-within {
    > ${Inputtext} {
      border: 1px solid green;
    }
    > ${Label} {
      color: green;
    }
  }
  input:focus {
    outline: none !important;
    border-color: 2px solid #719ece;
    box-shadow: 0 0 10px #719ece;
  }
  .IconStyle {
    position: absolute;
    margin-left: 4%;
    :hover {
      color: green;
    }
  }
`;
