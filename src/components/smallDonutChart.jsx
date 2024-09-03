import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { colorModeContext, tokens } from '../theme';

const DonutChart = ({value1, value2}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { colorScheme } = React.useContext(colorModeContext);
    const labels = ['Hotel Brands', 'Hotel Properties']; // Labels for each slice
    const defaultColor = "lightgray";
    const defaultColor2 = "gray";// Default color if undefined
    const accentColors =  [colors[`${colorScheme}Accent`]?.[400], colors[`${colorScheme}Accent`]?.[300], colors[`${colorScheme}Accent`]?.[200], colors[`${colorScheme}Accent`]?.[100]] || [defaultColor, defaultColor2];

    var options = {
        series: [17, 20],
        chart: {
        width: 400,
        type: 'donut',
      },
      labels: labels,
      plotOptions   : {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: '65%', // Adjust size if needed
          },
          dataLabels: {
            enabled: true,
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
    
      colors: accentColors,
      legend: {
        position: 'bottom', // Position the legend on the right side
        labels: {   
            colors: `${colors.grey[100]}`, // Change legend label color      
        },
        // formatter: function (val, opts) {
        //     return `${val}: ${opts.w.globals.series[opts.seriesIndex]}`; // Show the label name and the corresponding series value
        // },
        itemMargin: {
            horizontal: 13, // Adjust spacing between legend items
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
        <Typography variant='h5' style={{textAlign:"center"}}>Percentage Breakup</Typography>
    <div id="chart" >
      <ApexCharts options={options} series={options.series} type="donut" height="200px" width="340px"/>
    </div>
    </Box>
    </CardContent>
    </Card>
  );
};

export default DonutChart;
