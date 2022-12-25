import styled from 'styled-components';

export const Table = styled.table`
  background-color: ${p => p.theme.colors.white};
  width: 600px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.th`
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  background-color: #b3f972;
`;

export const TableData = styled.td`
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
`;

export const TableRow = styled.tr`
  :nth-of-type(2n + 1) {
    background-color: ${p => p.theme.colors.backgroundBody};
  }
  &:hover {
    cursor: pointer;
    box-shadow: 
    0px 3px 0px rgb(0 0 0 / 12%), 
    0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  }
`;