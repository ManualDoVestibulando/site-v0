import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  display: table;
`;

export const Thead = styled.div`
  color: white;
  background: red;
  font-weight: 500;
  display: table-header-group;
`;

export const Trow = styled.div`
  width: 600px;
  border-bottom: 1px solid gray;
  display: table-row;

  :nth-child(even) {
    background: #f002;
  }

  /* :nth-child(1) {
    width: 20%;
  }*/
`;

export const Tbody = styled.div`
  display: table-row-group;

  ${Trow}:hover {
    background-color: #f004;
    cursor: pointer;
  }

  ${props => props.show &&`
    display: none;
  `}
`;

export const Tcell = styled.div`
  padding: 0.6em 1em;
  display: table-cell;
`;

export const Tfoot = styled.div`
  display: table-footer-group;
  background-color: #f00a;
  color: white;

  ${Tcell} {
    :nth-child(even) {
      background: #f00b;
    }
  }
`;
