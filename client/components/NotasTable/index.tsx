import React from 'react';
import { useTable } from 'react-table';
import * as S from './style'

function NotasTable({notas}) {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Primeira fase',
        accessor: 'fase1', // accessor is the "key" in the data
      },
      {
        Header: 'Dia 1',
        accessor: 'fase2dia1',
      },
      {
        Header: 'Dia 2',
        accessor: 'fase2dia2',
      },
      {
        Header: 'Redação',
        accessor: 'redacao',
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: notas });

  return (
    <S.WrapperTable>
      <S.Table {...getTableProps()}>
        <S.Thead>
          {headerGroups.map((headerGroup, i) => (
            <S.Trow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <S.Tcell className="tcell" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </S.Tcell>
              ))}
            </S.Trow>
          ))}
        </S.Thead>
        <S.Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <S.Trow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <S.Tcell className="tcell" {...cell.getCellProps()}>{cell.render('Cell')}</S.Tcell>
                  );
                })}
              </S.Trow>
            );
          })}
        </S.Tbody>
      </S.Table>
    </S.WrapperTable>
  );
}

export default NotasTable;
