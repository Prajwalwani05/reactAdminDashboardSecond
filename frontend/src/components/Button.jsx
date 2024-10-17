import React from 'react'
import "./style.css";
import { Box, useTheme } from "@mui/material";
import { colorModeContext, tokens } from "../theme";

const Button = ({name}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { colorScheme } = React.useContext(colorModeContext);

    return (
    <Box sx={{backgroundColor: colors[`${colorScheme}Accent`]?.[200] , color:"#FFFFFF" }}  className='button'>{name}</Box>
  )
}

export default Button