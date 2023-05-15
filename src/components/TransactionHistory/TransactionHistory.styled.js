import styled from 'styled-components';

export const Transaction = styled.table`
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1),
    -1px 2px 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  table-layout: fixed;
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 20px 0;
`;
export const TableHeader = styled.th`
  background-color: #0abdd5;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  height: 38px;
  :nth-child(2) {
    border-left: 2px solid #35c5d9;
    border-right: 2px solid #35c5d9;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  font-size: 15px;
  height: 38px;
  :nth-child(2) {
    border-left: 1px solid rgb(201, 208, 215);
    border-right: 1px solid rgb(201, 208, 215);
  }
`;

export const TableRow = styled.tr`
  &:not(:nth-child(even)) {
    background-color: #F9F9F9;
  }
`;
