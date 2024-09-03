import { colors } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';

const MonthlyInflationChart = ({graphColor}) => {
 
    var options = {
        series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
        chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false // Disable the toolbar
          }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: false,
        }
      },
      colors: [graphColor],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        labels: {
            show: false // Hide the x-axis labels
          },
        axisBorder: {
            show: false // Hide the x-axis border
          },
          axisTicks: {
            show: false // Hide the x-axis ticks
          },
        // categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        //   'United States', 'China', 'Germany'
        // ],
      },
      yaxis:{
        labels: {
            show: false // Hide the x-axis labels
          },
      },
      grid: {
        show: false, // Hide the grid lines
      },
      tooltip: {
        theme: 'dark', // Change to 'light' for a light theme
        style: {
          fontSize: '14px',
          fontFamily: undefined,
          colors:"#FFFFFF"
        },
        x: {
          show: false,
          format: 'dd MMM',
          formatter: undefined,
          colors:"#ffffff"
        },
        y: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
        marker: {
          show: false,
        },
        items: {
          display: 'flex',
        },
        fixed: {
          enabled: false,
          position: 'topRight', // topRight, topLeft, bottomRight, bottomLeft
          offsetX: 0,
          offsetY: 0,
        }
       },
      };
  return (
    <div id="chart" >
      <ApexCharts options={options} series={options.series} type="bar" height="150px" width="150px"/>
    </div>
  );
};

export default MonthlyInflationChart;
