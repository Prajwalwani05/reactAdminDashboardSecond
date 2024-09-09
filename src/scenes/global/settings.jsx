// AnchorTemporaryDrawer.js
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Switch, Typography } from "@mui/material";
import { colorModeContext, tokens } from "../../theme";
import { BsCloudMoonFill } from "react-icons/bs";
import FontSelector from "../../components/FontChanger";
import ColorSelector from "../../components/colorSelector";

const AnchorTemporaryDrawer = ({ open, anchor, onClose }) => {
  // Create the list items to display in the drawer
  const [checked, setChecked] = React.useState(true);
  const { colorScheme } = React.useContext(colorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(colorModeContext);
  const handleChange = () => {
    colorMode.toggleColorMode(); // Call this function to toggle color mode
    setChecked(!checked);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
      }));

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        padding: "10px",
        backgroundColor: `${colors.primary["bg"]}`,
        height: "100vh",
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid padding="5px" container spacing={1}>
          <Grid item lg="8">
            <Item
              sx={{
                borderRadius: "20px",
                backgroundImage: "none",
                backgroundColor: colors.primary["bg"],
                border: `1px solid ${colors.primary["accent"]}`,
              }}
            >
              <Box
                display="flex"
                paddingLeft="10px"
                justifyContent="space-between"
                alignItems="center"
              >
                <BsCloudMoonFill
                  style={{ color: `${checked === true ? "white" : "grey"}` }}
                />
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase": {
                      color: "grey", // Color for the switch thumb
                      "&.Mui-checked": {
                        color: "white", // Color for the switch thumb when checked
                      },
                    },
                  }}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Box>
              <Typography
                style={{
                  marginTop: "5px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Dark mode
              </Typography>
            </Item>
          </Grid>
          {/* ${colors[`${colorScheme}Accent`]?.[500]}  */}
          <Grid item lg="14">
            <Item
              sx={{
                borderRadius: "20px",
                backgroundImage: "none",
                backgroundColor: colors.primary["bg"],
                border: `1px solid ${colors.primary["accent"]}`,
              }}
            >
              <FontSelector />
            </Item>
          </Grid>
          <Grid item lg="14">
            <Item
              sx={{
                borderRadius: "20px",
                backgroundImage: "none",
                backgroundColor: colors.primary["bg"],
                border: `1px solid ${colors.primary["accent"]}`,
              }}
            >
              <ColorSelector />
            </Item>
          </Grid>
          {/* <Grid item xs='6'>
          <Item>xs</Item>
        </Grid>
        <Grid item xs='6'>
          <Item>xs</Item>
        </Grid>
        <Grid item xs='6'>
          <Item>xs</Item>
        </Grid> */}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      {list(anchor)}
    </Drawer>
  );
};

export default AnchorTemporaryDrawer;
