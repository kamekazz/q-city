import { Paper } from '@material-ui/core';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { theme } from 'styles/muiTheme';

const myState = {
  series: [
    {
      name: 'RowD',
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 2)),
    },
    {
      name: 'RowC',
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 2)),
    },
    {
      name: 'RowB',
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 2)),
    },
    {
      name: 'RowA',
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 2)),
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    title: {
      text: 'Active Users',
    },
  },
};
export default function ActiveUsers() {
  return (
    <Paper>
      <ReactApexChart
        options={myState.options}
        series={myState.series}
        type="heatmap"
        height={200}
      />
    </Paper>
  );
}
