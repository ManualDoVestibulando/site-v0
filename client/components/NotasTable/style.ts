import styled from 'styled-components';

export const WrapperTable = styled.div`
  max-width: 40em;
  border-radius: 10px;
`;

export const Table = styled.div`
  width: 100%;
  display: table;
`;

export const Thead = styled.div`
  color: white;
  background: red;
  display: table-header-group;
`;

export const Trow = styled.div`
  width: 600px;
  border-bottom: 1px solid gray;
  display: table-row;

  :nth-child(even) {
    background: #f002;
  }

  :nth-child(1) {
    width: 22.5%;
  }
  :nth-child(2) {
    width: 22.5%;
  }
  :nth-child(3) {
    width: 22.5%;
  }
  :nth-child(4) {
    width: 22.5%;
  }
  :nth-child(5) {
    width: 10%;
  }
`;

export const Tbody = styled.div`
  display: table-row-group;

  ${Trow}:hover{
    background-color: #f004;
    cursor: pointer;
  }
`;

export const Tcell = styled.div`
  padding: 1em 1em;
  display: table-cell;
`;
