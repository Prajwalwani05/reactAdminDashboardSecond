import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingslinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, InputBase, Tooltip, useTheme } from "@mui/material";
import { colorModeContext, tokens } from "../../theme";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CiMenuKebab } from "react-icons/ci";
import "./global.css";
import profilepic from './assets/3d-fluency-male-user.png'
import AnchorTemporaryDrawer from "./settings";
import { NavLink, Outlet} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { HotelRounded } from "@mui/icons-material";


const initialDrawerWidth = 300;
const collapsedDrawerWidth = 0;
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
  },
}));
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({right: false,});
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // const colorScheme = theme.colorScheme;
  const drawerWidth = isCollapsed ? collapsedDrawerWidth : initialDrawerWidth;

  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuClosing = () =>{
    setIsCollapsed(!isCollapsed);
  }
 
  const StyledListItemButton = styled(ListItemButton)(({ colors, isActive }) => ({
    backgroundColor: isActive ? colors.redAccent[200] : 'transparent',
    color: isActive ? colors.grey[500] : 'grey',
    '& .MuiListItemIcon-root': {
      color: isActive ? colors.redAccent["hover"] : 'inherit',
    },
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  }));

  const drawer = (
    <div className="sidebar"
      style={{
        backgroundColor: `${colors.primary["bg"]}`,
        height: "auto",
        maxHeight: "auto",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <p style={{ color: colors[`${colorScheme}Accent`]?.[200] , fontFamily: `"Dancing Script", "cursive"`, fontSize:"30px", margin:"0",marginTop:"5px", fontWeight:"700" }}>
          P
        </p>
      </Toolbar>

        {/* <Divider /> */}
      <h4 style={{paddingLeft:"15px",  margin:"10px 5px 0px 5px"}}>Overview</h4>
      <List>
        <ListItem key="Dashboard" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon >
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </StyledListItemButton>
        </ListItem>
        <ListItem key="E-commerce" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/ecommerce"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <ShoppingCartIcon  />
        </ListItemIcon>
        <ListItemText primary="E-commerce" />
      </StyledListItemButton>
        </ListItem>
        <ListItem key="Analytics" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/analytics"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <AnalyticsIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </StyledListItemButton>
        </ListItem>
        <ListItem key="Banking" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/banking"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <AccountBalanceIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Banking" />
      </StyledListItemButton>
        </ListItem>

        <ListItem key="Hotels" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/hotels"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <HotelRounded  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Hotels" />
      </StyledListItemButton>
        </ListItem>
      </List>

      <h4 style={{paddingLeft:"15px" , margin:"10px 5px 0px 5px"}}>Forms</h4>
      <List>
        <ListItem key="ARR" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/arr"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <SummarizeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Aggregate Revenue Requirement" />
      </StyledListItemButton>
        </ListItem>
        <ListItem key="AD" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/ad"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <FeedOutlinedIcon  />
        </ListItemIcon>
        <ListItemText primary="Assets & Depreciation" />
      </StyledListItemButton>
        </ListItem>
        <ListItem key="inputUpload" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/inputUpload"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <CloudUploadOutlinedIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Input data upload" />
      </StyledListItemButton>
        </ListItem>
       
      </List>

      <h4 style={{paddingLeft:"15px", margin:"10px 5px 0px 5px"}}>Management</h4>
      <List>
        <ListItem key="User" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/user"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <AccountCircleIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="User" />
       </StyledListItemButton>
        </ListItem>
        <ListItem key="Product" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/product"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <DryCleaningIcon style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Product" />
       </StyledListItemButton>
        </ListItem>
        <ListItem key="Order" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/order"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <ShoppingBagIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Order" />
      </StyledListItemButton>
        </ListItem>
        <ListItem key="Mail" disablePadding style={{padding:"0 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/mail"
        end
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
      })}
      >
        <ListItemIcon>
          <MailIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </StyledListItemButton>
        </ListItem>
      </List>
      <Divider />  
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width:"100%", height:"100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: "none",
          boxShadow: "none",
          borderBottom: `1px solid ${colors.grey[900]}`,
          backgroundColor: `${
            theme.palette.mode === "dark"
              ? "#141a2172"
              : " rgba(255, 255, 255, 0.4)"
          } !important`,
          backdropFilter: "blur(5px)",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {/* <Toolbar>
          
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>   */}
        {/* Search Bar */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box display="flex" alignItems="center" borderRadius="3px">
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleMenuClosing}
              sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
            <Tooltip placement="bottom-start">
              <InputBase
              className="inputBox"
                sx={{ ml: 1, flex: 1 }}
                style={{ width: "100%"}}
                placeholder="Search for something..."
              />
            </Tooltip>
            <Tooltip></Tooltip>
          </Box>
         
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <NotificationsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Notifications
            </MenuItem>
            <Box>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuItem>
                    <ListItemIcon onClick={toggleDrawer(anchor, true)}>
                      <SettingslinedIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <AnchorTemporaryDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  />
                </React.Fragment>
              ))}
            </Box>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
              <Avatar alt="Travis Howard" style={{width:"30px", height:"30px"}} src={profilepic} />
                {/* <PersonOutlinedIcon fontSize="small" /> */}
              </ListItemIcon>
              Profile
            </MenuItem>
          </Menu>
          {/* Icons */}
          <Box display="flex" sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton>
              <Tooltip title="Notification" placement="top-end">
                <NotificationsOutlinedIcon />
              </Tooltip>
            </IconButton>
            <div style={{display:"flex", alignItems:"center"}}>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Tooltip title="Settings" placement="top-end">
                    <IconButton
                      onClick={toggleDrawer(anchor, true)}
                      className="settingIcon"
                    >
                      <SettingslinedIcon />
                    </IconButton>
                  </Tooltip>
                  <AnchorTemporaryDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  />
                </React.Fragment>
              ))}
            </div>
            <IconButton>
              <Tooltip title="Profile" placement="top-end">
                {/* <PersonOutlinedIcon /> */}
                <Avatar style={{width:"31px", height:"31px"}} alt="Travis Howard" src={profilepic} />
               
              </Tooltip>
            </IconButton>
          </Box>
          <Box sx={{ display: { sm: "none" } }}>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ mr: 2 }}
            >
              <CiMenuKebab />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          
        >
          {drawer}
        </StyledDrawer>
        <StyledDrawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="sidebar"
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              transition: state === "entered" ? "width 0.3s" : "none",
            },
          }}
          open
        >
          {drawer}
        </StyledDrawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: `${colors.primary["bg"]}`,
          height: "max-content",
        }}
      >
        <Toolbar sx={{minHeight:"50px !important"}} className="yoo" />
        {/* <Routes>
            <Route path="/login" element={<Login /> } />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Dashboard />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/arr" element={<FullFeaturedCrudGrid />} />
            <Route path="/ad" element={<AssestsDepreciation />} />
            <Route path="/inputUpload" element={<InputUpload />} />
            <Route path="/mail" element={<Mail />} />
          </Routes> */}
          <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
