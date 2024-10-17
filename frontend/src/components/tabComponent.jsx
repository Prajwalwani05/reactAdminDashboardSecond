import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import { colorModeContext, tokens } from '../theme';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Card sx={{ padding: "0", borderRadius: "20px",backgroundImage:'none', backgroundColor: `${colors.primary["specialCards"]}` }}>
    <CardContent className='cardContent' sx={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", padding:"8px !important" }}>
    <Box width="100%" display="flex" flexDirection="column" gap="0px" padding="0">
    <h2 Related style={{marginLeft:"12px"}}>Related applications</h2>
    
    <Box sx={{ bgcolor: `${colors.primary["bg"]}`,borderRadius:"12px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}>
      <AppBar position="static" style={{borderRadius:"12px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: colors[`${colorScheme}Accent`]?.[500], // Override with your custom color
            },
          }}    
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{backgroundColor:`${colors.primary["card"]}`, color:`${colors.grey[100]}`, borderRadius:"12px 12px 0 0"}}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
    </Box>
    </CardContent>
    </Card>
  );
}