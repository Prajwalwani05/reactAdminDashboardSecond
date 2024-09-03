import { Box, Card, CardContent, useTheme } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { colorModeContext, tokens } from '../theme';

const DonutChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { colorScheme } = React.useContext(colorModeContext);

    var options = {
        series: [15, 55, 41, 17],
        chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions   : {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: '65%', // Adjust size if needed
          },
          dataLabels: {
            offset: 0,
          },
        },
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
    <Card sx={{ minWidth: 150 , padding:"0", borderRadius:"20px", backgroundColor:`${colors.primary["bg"]}`}}>
    <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <Box display="flex" flexDirection="column" gap="5px">
        <h2>Current download</h2>
    <div id="chart" >
      <ApexCharts options={options} series={options.series} type="donut" height="300px" width="300px"/>
    </div>
    </Box>
    </CardContent>
    </Card>
  );
};

export default DonutChart;
