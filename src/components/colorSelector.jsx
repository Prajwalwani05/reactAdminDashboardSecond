// ColorSelector.js
import React, { useContext } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { colorModeContext, tokens } from "../theme";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';

const ColorSelector = () => {
  const colorMode = React.useContext(colorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme} = useContext(colorModeContext)
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 10px 5px",
      }}
    >
      <Grid container spacing={1}>
        {["red", "yellow", "blue", "green"].map((color, index) => (
          <Grid
            item
            xs={6}
            key={index}
            onClick={() => colorMode.changeColorScheme(color)}
            paddingTop="none"
            sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              cursor: "pointer",
              textAlign: "center",
              padding: "15px 15px",
              verticalAlign:"middle",
              borderRadius: "15px",
              border:
                colorScheme === color
                  ? `1px solid ${colors.primary["card"]}`
                  : "1px solid transparent",
              backgroundColor:
              colorScheme === color
                  ? colors[`${colorMode.colorScheme}Accent`]?.["hover"]
                  : "transparent"
            }}
          >
            <SpaceDashboardRoundedIcon
              style={{
                // color:colors[`${colorMode.colorScheme}Accent`]?.[200],
                color: color === 'red' ? colors.redAccent["500"] : color === 'yellow' ? colors.yellowAccent["500"] : color === 'green' ? colors.greenAccent["500"] :  colors.blueAccent["500"],
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        style={{ marginTop: "5px", fontWeight: "700", fontSize: "15px" }}
      >
        Presets
      </Typography>
    </Box>
  );
};

export default ColorSelector;
