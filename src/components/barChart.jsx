import React from 'react';
import ApexCharts from 'react-apexcharts';

const MonthlyInflationChart = ({graphColor, dataValues, height, width}) => {
 
    var options = {
        series: [{
        data: dataValues
      }],
        chart: {
        type: 'bar',
        height: 300,
        toolbar: {
            show: false // Disable the toolbar
          }
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
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
            return val;
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
      <ApexCharts options={options} series={options.series} type="bar" height={height} width={width}/>
    </div>
  );
};

export default MonthlyInflationChart;
