// import React from 'react'
// import { Typography, Box,  useTheme} from '@mui/material'
// import { tokens } from '../theme';
// const Header = ({title, subtitle}) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);

//   return (
//     <Box mb='20px'>
//         <Typography variant='h3' color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}>
//             {title}
//         </Typography>
//         <Typography variant='h5' color={colors.grey[500]} >
//             {subtitle}
//         </Typography>
//     </Box>
//   )
// }

// export default Header

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import {useTheme } from '@mui/material';
import { tokens } from '../theme';
import SpeedIcon from '@mui/icons-material/Speed';


export default function CustomSeparator({pageName, IconComponent}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const breadcrumbs = [
    <Link style={{color:colors.grey[600], display:'flex', alignItems:'center', gap:'8px'}} className='breadcrumbLink'  key="1" to="/">
      <SpeedIcon />
      <p>
      Dashboard
      </p>
    </Link>,
    <Typography style={{ display:'flex', alignItems:'center', gap:'8px'}} key="3" color="text.primary">
      {IconComponent && <IconComponent />}
      {pageName}
    </Typography>,
  ];

  return (
    <Stack mb={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
