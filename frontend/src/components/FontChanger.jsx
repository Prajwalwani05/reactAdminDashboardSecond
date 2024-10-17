import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../theme';
import { GoTypography } from "react-icons/go";

const FontChanger = () => {
  const colorMode = React.useContext(colorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define the font options
  const fontOptions = {
    'Source Sans Pro': "'Source Sans Pro', sans-serif",
    'Poppins': "'Poppins', sans-serif",
    'Inter': "'Inter', sans-serif",
    'Nunito': "'Nunito', sans-serif",
  };

  // Get the current fontFamily from the theme
  const currentFontFamily = theme.typography.fontFamily;

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" , padding:"10px 10px 5px"}}>
      <Grid container spacing={1}>
        {Object.entries(fontOptions).map(([fontName, font]) => (
          <Grid
            item
            xs={6}
            key={fontName}
            onClick={() => colorMode.changeFont(font)}
            sx={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '15px',
              borderRadius: '15px',
              border: currentFontFamily === font ? `1px solid ${colors.primary["card"]}` : '1px solid transparent',
              backgroundColor: currentFontFamily === font ? colors.primary["light"] : 'transparent',
            }}
          >
            <GoTypography style={{color:currentFontFamily === font ? colors[`${colorMode.colorScheme}Accent`]?.[200] : colors.grey[700], marginBottom:"5px"}}/>
            <Typography variant="body1" style={{ fontFamily: font, color:currentFontFamily === font ? colors.grey[100] : colors.grey[700]}}>
              {fontName}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography style={{marginTop:"5px", fontWeight:"700", fontSize:"15px"}}>Font</Typography>
    </Box>
  );
};

export default FontChanger;
