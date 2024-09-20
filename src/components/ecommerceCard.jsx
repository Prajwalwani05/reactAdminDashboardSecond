import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import LineChart from './lineChart';

export default function BasicCard2({firstName, value, percentage, linecolor, bg, lineChartData1}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ minWidth: 150 , padding:"0", borderRadius:"20px", backgroundColor:bg, backgroundImage:'none'}}>
      <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center", paddingBottom:'16px !important'}}>
        <Box display="flex" flexDirection="column" gap="5px">
        <Typography sx={{ fontSize: 16 , color:`${colors.primary[500]}`, fontWeight:"600"}}  gutterBottom>
          {firstName}
        </Typography>
        <Typography sx={{fontWeight:"700"}}  variant="h2" component="div">
          {value}
        </Typography>
        <Typography variant="h6" component="div">
          {percentage}
        </Typography>
        </Box>
        <Box>
        <Box padding="0" component="div">
          <LineChart lineChartData1={lineChartData1} linecolor={linecolor} height={'130px'} width={'130px'}/>
        </Box>
        </Box>
      </CardContent>
      
    </Card>
  );
}
