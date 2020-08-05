import React from 'react';
import { useTable } from 'react-table';
import * as S from './style';
import { notasHeaders } from '../../pages/[instituto]/[curso]/fuvest/data';

function NotasTable({ notas, showBody }: { notas: any; showBody?: boolean }) {
  const columns = React.useMemo(notasHeaders, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data: notas });
  return (
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
      <S.Tbody show={showBody} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <S.Trow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <S.Tcell className="tcell" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </S.Tcell>
                );
              })}
            </S.Trow>
          );
        })}
      </S.Tbody>
      <S.Tfoot>
        {footerGroups.map((group) => (
          <S.Trow {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <S.Tcell {...column.getFooterProps()}>
                {column.render('Footer')}
              </S.Tcell>
            ))}
          </S.Trow>
        ))}
      </S.Tfoot>
    </S.Table>
  );
}

export default NotasTable;
