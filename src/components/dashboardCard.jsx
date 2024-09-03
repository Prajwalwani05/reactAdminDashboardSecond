import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MonthlyInflationChart from './barChart';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';

export default function BasicCard({firstName, value, percentage, graph, bg}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Card sx={{ minWidth: 150 , padding:"0", borderRadius:"20px", backgroundColor:bg}}>
      <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
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
          <MonthlyInflationChart graphColor={graph}/>
        </Box>
        </Box>
      </CardContent>
      
    </Card>
  );
}
