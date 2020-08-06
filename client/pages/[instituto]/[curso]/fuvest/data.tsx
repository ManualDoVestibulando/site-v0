import React from "react";
import { arrAvg } from "../../../../utils/array";

export const notasHeaders = () => [
      {
        Header: 'Posição',
        accessor: 'classificacao', // accessor is the "key" in the data
        Footer: (
          <>
            <div>Media:</div>
            <div>Maxiomo:</div>
            <div>Minimo:</div>
          </>
        ),
      },
      {
        Header: 'Primeira fase',
        accessor: 'fase1', // accessor is the "key" in the data
        Footer: (info) => {
          let values = info.rows.map((row) => row.values.fase1);
          let max = Math.max();
          return (
            <>
              <div>{arrAvg(values).toFixed(2)}</div>
              <div>{Math.max(...values).toFixed(2)}</div>
              <div>{Math.min(...values).toFixed(2)}</div>
            </>
          );
        },
      },
      {
        Header: 'Dia 1',
        accessor: 'fase2dia1',
        Footer: (info) => {
          let values = info.rows.map((row) => row.values.fase2dia1);
          let max = Math.max();
          return (
            <>
              <div>{arrAvg(values).toFixed(2)}</div>
              <div>{Math.max(...values).toFixed(2)}</div>
              <div>{Math.min(...values).toFixed(2)}</div>
            </>
          );
        },
      },
      {
        Header: 'Dia 2',
        accessor: 'fase2dia2',
        Footer: (info) => {
          let values = info.rows.map((row) => row.values.fase2dia2);
          let max = Math.max();
          return (
            <>
              <div>{arrAvg(values).toFixed(2)}</div>
              <div>{Math.max(...values).toFixed(2)}</div>
              <div>{Math.min(...values).toFixed(2)}</div>
            </>
          );
        },
      },
      {
        Header: 'Redação',
        accessor: 'redacao',
        Footer: (info) => {
          let values = info.rows.map((row) => row.values.redacao);
          let max = Math.max();
          return (
            <>
              <div>{arrAvg(values).toFixed(2)}</div>
              <div>{Math.max(...values).toFixed(2)}</div>
              <div>{Math.min(...values).toFixed(2)}</div>
            </>
          );
        },
      },
      {
        Header: 'Total',
        accessor: 'total',
        Footer: (info) => {
          let values = info.rows.map((row) => row.values.total);
          let max = Math.max();
          return (
            <>
              <div>{arrAvg(values).toFixed(2)}</div>
              <div>{Math.max(...values).toFixed(2)}</div>
              <div>{Math.min(...values).toFixed(2)}</div>
            </>
          );
        },
      },
    ]