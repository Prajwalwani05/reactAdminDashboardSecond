import { Box, Card, CardContent, useTheme } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { colorModeContext, tokens } from '../theme';

const MultipleBarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext)
  const options = {
    series: [{
      name: 'Asia',
      data: [44, 55, 41, 67, 22, 43]
    }, {
      name: 'Europe',
      data: [13, 23, 20, 8, 13, 27]
    }, {
      name: 'Americas',
      data: [11, 17, 15, 15, 21, 14]
    }],
    chart: {
      type: 'bar',
      height: 300,
      stacked: true,
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        columnWidth: '25%', // Adjust the width of bars
      },
    },
    colors: [colors[`${colorScheme}Accent`]?.[500], colors.greenAccent[200] , colors.yellowAccent[200] ],
    xaxis: {
      type: 'number',
      categories: [1 ,2 , 3, 4 , 5 ,6],
      axisBorder: {
        show: true, // Hide the x-axis border
      },
      axisTicks: {
        show: false, // Hide the x-axis ticks
      },
      labels: {
        show: false, // Hide the x-axis labels
      },
      grid: {
        show: false, // Hide horizontal grid lines
      },
    },
    yaxis: {
      axisBorder: {
        show: false, // Hide the y-axis border
      },
      axisTicks: {
        show: false, // Hide the y-axis ticks
      },
      labels: {
        show: false, // Hide the y-axis labels
      },
      grid: {
        show: false, // Hide horizontal grid lines
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
          colors:`${colors.grey[500]}`
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
    legend: {
     show: false
    },
    
    dataLabels: {
      enabled: false, // Hide data labels on bars
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
          colors: "#FFFFFF"
        },
      },
    }],
  };

  return (
    <Card sx={{ padding: "0", borderRadius: "20px",backgroundImage:'none', backgroundColor: `${colors.primary["specialCards"]}` }}>
      <CardContent sx={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", paddingBottom:'16px !important' }}>
        <Box width="100%" display="flex" flexDirection="column" gap="5px">
          <h2 style={{margin:'0'}}>Installed</h2>
          <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
            <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
            <div style={{backgroundColor: colors[`${colorScheme}Accent`]?.[500], width:"12px", height:"12px", borderRadius:"50%"}}></div>
            <span>Asia</span>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
            <div style={{backgroundColor: `${colors.greenAccent[200]}`, width:"12px", height:"12px", borderRadius:"50%"}}></div>
            <span>Europe</span>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
            <div style={{backgroundColor: `${colors.yellowAccent[200]}`, width:"12px", height:"12px", borderRadius:"50%"}}></div>
            <span>Americas</span>
            </div>
          </div>
          <div id="chart" style={{display:"flex", justifyContent:"center"}}>
            <ApexCharts options={options} series={options.series} type="bar" height={230} width={600} />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MultipleBarChart;
