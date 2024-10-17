import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled, useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../theme'; // Adjust the import path as necessary

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: '#308fe8',
    }),
  },
}));

export default function LinearDeterminate({userProgress, bg}) {
  const [progress, setProgress] = React.useState(userProgress);
  const theme = useTheme(); // Access the theme
  const colors = tokens(theme.palette.mode); // Get colors based on theme mode
  const scaledProgress = (progress / 10) * 100;
  return (
    <Box sx={{ width: '100%' }}>
      <BorderLinearProgress 
        variant="determinate" 
        value={scaledProgress} 
        sx={{
           backgroundColor:colors.primary['accent'],
          '& .MuiLinearProgress-bar': {
            backgroundColor: bg || '#1a90ff',
          },
          height: 8, // Height adjustments if needed
        }}
      />
    </Box>
  );
}
