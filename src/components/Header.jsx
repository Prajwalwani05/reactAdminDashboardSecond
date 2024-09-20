import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import {useTheme } from '@mui/material';
import { tokens } from '../theme';
import SpeedIcon from '@mui/icons-material/Speed';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function CustomSeparator({pageName, IconComponent, parentName, IconComponent2}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const breadcrumbs = [
    <Link style={{color:colors.grey[600], display:'flex', alignItems:'center', gap:'8px'}} className='breadcrumbLink'  key="1" to="/">
      <SpeedIcon />
      <p>
      Dashboard
      </p>
    </Link>,
    parentName && (
    <Typography
     underline="hover"
     key="2"
     color="inherit"
     onClick={handleClick}
     style={{ display:'flex', alignItems:'center', gap:'8px'}}
   >
    {IconComponent2 && <IconComponent2 />}
     {parentName}
   </Typography>),
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
