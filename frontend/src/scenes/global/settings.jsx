import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FormControlLabel, Switch, Typography } from "@mui/material";
import { colorModeContext, tokens } from "../../theme";
import FontSelector from "../../components/FontChanger";
import ColorSelector from "../../components/colorSelector";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

const AnchorTemporaryDrawer = ({ open, anchor, onClose }) => {
  const [checked, setChecked] = React.useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(colorModeContext);
  const handleChange = () => {
    colorMode.toggleColorMode();
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
      // onClick={onClose}
      // onKeyDown={onClose}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid padding="5px" container spacing={1}>
          <Grid item lg="12">
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
                justifyContent="space-around"
                alignItems="center"
              >
                 <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} checked={checked} onChange={handleChange}/>
                {/* <BsCloudMoonFill
                  style={{ color: `${checked === true ? "white" : "grey"}` }}
                /> */}
                
                {/* <Switch
                  sx={{
                    "& .MuiSwitch-switchBase": {
                      color: "grey",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    },
                  }}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                /> */}
                <Typography variant="h6">{checked ? "Dark Mode" : "Light Mode"}</Typography>
              </Box>
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
