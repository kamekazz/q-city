import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { theme } from 'styles/muiTheme';
const myState = {
  series: [45],
  options: {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gridArea: 'BatteryCount',
  },
}));
export default function BatteryCount() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography style={{ fontSize: 22 }}>Available Batteries</Typography>
      <ReactApexChart
        options={myState.options}
        series={myState.series}
        type="radialBar"
      />
      <Typography
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          color: theme.palette.primary.main,
        }}
      >
        50/120
      </Typography>
    </Paper>
  );
}
