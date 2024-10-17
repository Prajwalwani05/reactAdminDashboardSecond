import {useTheme } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { colorModeContext, tokens } from '../theme';

const PieChart = ({graphColor, dataValues, height, width}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { colorScheme } = React.useContext(colorModeContext);
    console.log(dataValues); // Check if dataValues is an array and contains numbers

    var options = {
        series: dataValues,
        chart: {
        type: 'pie',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      stroke: {
        show: false, // Remove border
      },
      dataLabels: {
        enabled: false
      },
    
      colors: [colors[`${colorScheme}Accent`]?.[400], colors[`${colorScheme}Accent`]?.[300], colors[`${colorScheme}Accent`]?.[200], colors[`${colorScheme}Accent`]?.[100]],
      legend: {
        position: 'bottom',
        labels: {
            colors: `${colors.grey[100]}`, // Change legend label color
          },
        formatter: function(val, opts) {
          return  opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
            horizontal: 10, // Adjust spacing between legend items
          },
      },
      
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };
  return (
        <div id="chart" >
          <ApexCharts options={options} series={options.series} type="pie" height={height} width={width}/>
        </div>
  );
};

export default PieChart;
