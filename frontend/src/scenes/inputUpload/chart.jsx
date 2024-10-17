import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: 'Image',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'Pdf',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false // Disable the toolbar
          }
        },
        colors: ["#ffff3f", "#c86bfa"],
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
        stroke: {
            width: 0,
          curve: 'smooth'
        },
       
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      }
    };
  }

  render() {
    
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="800px"
          height="200px"
/>
      </div>
    );
  }
}

export default ApexChart;
