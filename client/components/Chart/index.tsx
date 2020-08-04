import React from 'react';
import { Chart } from 'react-charts';

const DisChart = ({}) => {
  const data = [
    {
      label: 'Notas',
      data: [
        [0, 3],
        [1, 1],
        [2, 5],
        [3, 6],
        [4, 4],
      ],
    },
  ];

  const axes = [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' },
  ];
  return (
    <Chart
      style={{ width: '400px', height: '300px' }}
      data={data}
      axes={axes}
    />
  );
};

export default DisChart;
