import { useTheme } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { colorModeContext, tokens } from '../theme';
import { X } from '@mui/icons-material';
import { Offset } from 'devextreme-react/cjs/autocomplete';

const RadialChart = ({height,width, labels, value, color, gradientColor, size, labelFontSize, valueFontSize, OffsetValue}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);

  const options = {
    series: value,
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: `${size}%`,
        },
        track: {
            background: colors.primary["accent"], // Light grey background for the radial track
            strokeWidth: '45%', // Full width of the background track
          },
        dataLabels: {
          name: {
            show: labels ? labels : false, // Show the name label
            color: colors.grey[400], // Name label color
            fontSize: labels ? labelFontSize : '15px',          
          },
          value: {
            show: true,
            color: colors.grey[100],
            fontSize: valueFontSize,
            offsetY: OffsetValue,  
          },
        },
      },
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: gradientColor,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [4]
        },
        colors: color
      },
    stroke: {
      lineCap: 'round',
      width: 2, 

    },
    labels: [`${labels}`],
  };

  return (
    <div id="chart">
      <ApexCharts options={options} series={options.series} type="radialBar" height={height} width={width}/>
    </div>
  );
};

export default RadialChart;
