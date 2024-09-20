import { colors, useTheme } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { colorModeContext, tokens } from '../theme';

const LineChart = ({height, linecolor, width, lineChartData1, lineChartData2}) => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    // const { colorScheme } = React.useContext(colorModeContext);
    const series = [
      {
          name: 'Series 1',  // First series name
          data: lineChartData1 // First line data
      },
  ];

  if (lineChartData2 && lineChartData2.length > 0) {
      series.push({
          name: 'Series 2',  // Second series name
          data: lineChartData2 // Second line data
      });
  }

    var options = {
        series: series,
        chart: {
        type: 'line',
        height: 150,
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
      colors: linecolor,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
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
        },
      
       },
      };
  return (
    <div id="chart" >
      <ApexCharts options={options} series={options.series} type="line" height={height} width={width}/>
    </div>
  );
};

export default LineChart;
