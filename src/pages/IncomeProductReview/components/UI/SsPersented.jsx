import { calculateParse } from 'helpers/math';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [this.props._lot, 5, 36, 60, 90, 120],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 380,
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom',
            },
          },
        },
        colors: [
          '#0B72B9',
          '#546E7A',
          '#13d8aa',
          '#2b908f',
          '#A5978B',
          '#d4526e',
          '#f9a3a4',
          '#90ee7e',
          '#f48024',
          '#69d2e7',
        ],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#000000'],
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff'],
        },
        xaxis: {
          categories: [
            'Lot',
            'Sample Size',
            'Suggests Sample size +3%',
            'Suggests Sample size +5%',
            'Suggests Sample size +7.5%',
            'Suggests Sample size +10%',
          ],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        title: {
          text: 'Sampling  for inspection',
          align: 'center',
          floating: true,
        },
        subtitle: {
          text: 'ISO (the International Organization for Standardization)',
          align: 'center',
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return '';
              },
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={[
            {
              data: [
                this.props._lot,
                this.props._sample_size,
                Math.ceil(calculateParse(this.props._lot, 0.03)),
                Math.ceil(calculateParse(this.props._lot, 0.05)),
                Math.ceil(calculateParse(this.props._lot, 0.075)),
                Math.ceil(calculateParse(this.props._lot, 0.1)),
              ],
            },
          ]}
          type="bar"
          height={380}
        />
      </div>
    );
  }
}

export { ApexChart };

// categories: ['Lot', 'Suggests Sample size', 'Sample Size'],
