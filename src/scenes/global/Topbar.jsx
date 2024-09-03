import React, {useContext} from 'react'
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import  LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import  DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import  NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import  SettingslinedIcon from '@mui/icons-material/SettingsOutlined';
import  PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import  SearchIcon from '@mui/icons-material/Search';
import  "./global.css";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} position="sticky" top="0" >
        { /* Search Bar */ }
        <Box display="flex" alignItems="center"  borderRadius="3px">
            <IconButton type="button" sx={{p:1}}>
            <SearchIcon />
            </IconButton>
            <Tooltip title="Search" placement='bottom-start'>   
            <InputBase sx={{ml: 1 , flex: 1}} style={{width:"900px"}}  placeholder="Search for something..." />
            </Tooltip>

        </Box>
            {/* Icons */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark"
                    ? (
                        <DarkModeOutlinedIcon />
                    )
                    : (
                        <LightModeOutlinedIcon />
                    )
                    }

                </IconButton>
                <IconButton>
                <Tooltip title="Notification" placement="top-end">
                    <NotificationsOutlinedIcon/>
                </Tooltip>
                </IconButton>
                <IconButton>
                <Tooltip title="Settings" placement="top-end">
                    <SettingslinedIcon className='settingIcon'/>
                </Tooltip>    
                </IconButton>
                <IconButton>
                <Tooltip title="Profile" placement="top-end">
                    <PersonOutlinedIcon />
                </Tooltip>    
                </IconButton>
            </Box>
    </Box>
  )
}

export default Topbar;