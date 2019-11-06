import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadialChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            offsetY: -20
          },
          plotOptions: {
            radialBar: {
                //   size: undefined,
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '100%',
                margin: 15, // margin is in pixels
                shadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          fill: {
            colors: ['#14D633'],
            pattern: {
                width: 100,
            },
          },
          labels: ['Average Results'],
        },
        series: [76],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar" height="300" />
        </div>
        )
    }
}

export default RadialChart;
