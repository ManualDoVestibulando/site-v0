import React from 'react';
import { useTable } from 'react-table';
import { notasHeaders } from './data';
import BTable from 'react-bootstrap/Table';

function NotasTable({ notas, showBody }: { notas: Array<any>; showBody?: boolean }) {
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
    <BTable striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="tcell" {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody show={showBody} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <th className="tcell" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((group) => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <th {...column.getFooterProps()}>
                {column.render('Footer')}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </BTable>
  );
}

export default NotasTable;
