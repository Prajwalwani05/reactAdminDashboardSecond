import * as React from "react";
import { useNavigate } from "react-router-dom";
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
import { Avatar, Collapse, InputBase, Tooltip, useTheme } from "@mui/material";
import { colorModeContext, tokens } from "../../theme";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CiMenuKebab } from "react-icons/ci";
import "./global.css";
import profilepic from "./assets/3d-fluency-male-user.png";
import AnchorTemporaryDrawer from "./settings";
import { NavLink, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { styled } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import {
  AddCircle,
  ChevronLeft,
  ChevronRight,
  ExpandMore,
  HotelRounded,
  Info,
  ListAlt,
} from "@mui/icons-material";
import greenLogo from "./assets/icons8-p-100.png";
import blueLogo from "./assets/icons8-p-100 (1).png";
import redLogo from "./assets/icons8-p-100 (2).png";
import yellowLogo from "./assets/icons8-p-100 (3).png";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";

const initialDrawerWidth = 285;
const collapsedDrawerWidth = 65;
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
  const [state, setState] = React.useState({ right: false });
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);

  const drawerWidth = isCollapsed ? collapsedDrawerWidth : initialDrawerWidth;
  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
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

  const handleMenuClosing = () => {
    setIsCollapsed(!isCollapsed);
  };
  const navigate = useNavigate();

  const StyledListItemButton = styled(ListItemButton)(
    ({ colors, isActive }) => ({
      backgroundColor: isActive ? colors.redAccent[200] : "transparent",
      color: isActive ? colors.grey[500] : "grey",
      "& .MuiListItemIcon-root": {
        color: isActive ? colors.redAccent["hover"] : "inherit",
      },
    })
  );

  const drawer = (
    <div
      className="" style={{backgroundColor: `${colors.primary["bg"]}`, height: "100vh", overflow: "hidden",}}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        style={{ paddingLeft: "10px" }}
      >
        <img
          src={
            colorScheme === "green"
              ? greenLogo
              : colorScheme === "red"
              ? redLogo
              : colorScheme === "yellow"
              ? yellowLogo  
              : blueLogo
          }
          width={!collapsedDrawerWidth ? "50px" : "35px"}
          alt="logo"
        />
      </Toolbar>
      <div className="sidebarScoller" style={{ overflowX: "hidden", maxHeight: "calc(100vh - 64px)" }}>
        {!isCollapsed && (
          <h4 style={{ paddingLeft: "15px", margin: "10px 5px 0px 5px" }}>
            Overview
          </h4>
        )}
        <List>
          <ListItem
            key="Dashboard"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("dashboard")}
              component={NavLink}
              to="/"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                isActive 
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <SpeedRoundedIcon />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Dashboard" />}
            </StyledListItemButton>
          </ListItem>

          <ListItem
            key="DistrictWise Summary"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("districtWiseSummary")}
              component={NavLink}
              to="/districtWiseSummary"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <SummarizeOutlinedIcon />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="DistrictWise Summary" />}
            </StyledListItemButton>
          </ListItem>

          <ListItem
            key="E-commerce"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("eCommerce")}
              component={NavLink}
              to="/ecommerce"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="E-commerce" />}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="Analytics"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("analytics")}
              component={NavLink}
              to="/analytics"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <AnalyticsIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Analytics" />}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="Banking"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("banking")}
              component={NavLink}
              to="/banking"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <AccountBalanceIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Banking" />}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="Hotels"
            disablePadding
            style={{
              display: "flex",
              flexDirection: "column",
              padding: !isCollapsed ? "0 5px" : "7px 5px",
            }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("Hotels")} // Toggle the submenu on click
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={{
                backgroundColor:
                  openMenu === "Hotels"
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  openMenu === "Hotels"
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
                width: "100%",
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <HotelRounded style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Hotels" />}
              {openMenu === "Hotels"
                ? !isCollapsed && <ExpandMore />
                : !isCollapsed && <ChevronRight />}
            </StyledListItemButton>

            {/* Collapsible Submenu */}
            <Collapse
              style={{ width: "100%" }}
              in={openMenu === "Hotels"}
              timeout="auto"
              unmountOnExit
            >
              <Box sx={{ display: "flex", width: "100%" }}>
                {!isCollapsed && (
                  <Box
                    sx={{
                      backgroundColor: colors.grey[900],
                      borderRadius: "20px",
                      width: "2.5px",
                      height: "auto",
                      margin: "0px 0px 10px 23px",
                    }}
                  >
                    <p style={{ visibility: "hidden", margin: "0" }}>p</p>
                  </Box>
                )}

                <List style={{ width: "100%" }} component="div" disablePadding>
                  <ListItem
                    className={!isCollapsed && "listItem"}
                    disablePadding
                  >
                    <StyledListItemButton
                      component={NavLink}
                      to="/hotels/list"
                      className={
                        theme.palette.mode === "dark"
                          ? "listItemDark"
                          : "listItemLight"
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive
                          ? colors.primary["hover"]
                          : "transparent",
                        color: isActive ? colors.grey[100] : colors.grey[500],
                        borderRadius: "10px",
                        marginBottom: "3px",
                        width: "100%",
                      })}
                    >
                      <ListItemIcon sx={{ minWidth: "35px" }}>
                        <ListAlt style={{ color: "inherit" }} />
                      </ListItemIcon>
                      {!isCollapsed && <ListItemText primary="List" />}
                    </StyledListItemButton>
                  </ListItem>

                  <ListItem
                    className={!isCollapsed && "listItem"}
                    disablePadding
                  >
                    <StyledListItemButton
                      component={NavLink}
                      to="/hotels/details"
                      className={
                        theme.palette.mode === "dark"
                          ? "listItemDark"
                          : "listItemLight"
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive
                          ? colors.primary["hover"]
                          : "transparent",
                        color: isActive ? colors.grey[100] : colors.grey[500],
                        borderRadius: "10px",
                        marginBottom: "3px",
                        width: "100%",
                      })}
                    >
                      <ListItemIcon sx={{ minWidth: "35px" }}>
                        <Info style={{ color: "inherit" }} />
                      </ListItemIcon>
                      {!isCollapsed && <ListItemText primary="Details" />}
                    </StyledListItemButton>
                  </ListItem>

                  <ListItem
                    className={!isCollapsed && "listItem"}
                    disablePadding
                  >
                    <StyledListItemButton
                      component={NavLink}
                      to="/hotels/create"
                      className={
                        theme.palette.mode === "dark"
                          ? "listItemDark"
                          : "listItemLight"
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive
                          ? colors.primary["hover"]
                          : "transparent",
                        color: isActive ? colors.grey[100] : colors.grey[500],
                        borderRadius: "10px",
                        width: "100%",
                      })}
                    >
                      <ListItemIcon sx={{ minWidth: "35px" }}>
                        <AddCircle style={{ color: "inherit" }} />
                      </ListItemIcon>
                      {!isCollapsed && <ListItemText primary="Create" />}
                    </StyledListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Collapse>
          </ListItem>

          <ListItem
            key="teams"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("teams")}
              component={NavLink}
              to="/teams"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <GroupsIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Teams" />}
            </StyledListItemButton>
          </ListItem>
        </List>
        {!isCollapsed && (
          <h4 style={{ paddingLeft: "15px", margin: "10px 5px 0px 5px" }}>
            Forms
          </h4>
        )}
        <List>
          <ListItem
            key="ARR"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("arr")}
              component={NavLink}
              to="/arr"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <SummarizeOutlinedIcon />
              </ListItemIcon>
              {!isCollapsed && (
                <ListItemText primary="Aggregate Revenue Requirement" />
              )}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="AD"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("ad")}
              component={NavLink}
              to="/ad"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <FeedOutlinedIcon />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Assets & Depreciation" />}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="inputUpload"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("inputUpload")}
              component={NavLink}
              to="/inputUpload"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <CloudUploadOutlinedIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Input data upload" />}
            </StyledListItemButton>
          </ListItem>
        </List>

        {!isCollapsed && (
          <h4 style={{ paddingLeft: "15px", margin: "10px 5px 0px 5px" }}>
            Management
          </h4>
        )}
        <List>
          {/* <ListItem key="User" disablePadding style={{padding: !isCollapsed ? "0 5px": "7px 5px"}}>
        <StyledListItemButton
        component={NavLink}
        to="/users"
        end
        className={
          theme.palette.mode === 'dark'
            ? 'listItemDark'
            : 'listItemLight'
        } 
        style={({ isActive }) => ({
          backgroundColor: isActive ? colors[`${colorScheme}Accent`]?.['hover'] : 'transparent',
          color: isActive ? colors[`${colorScheme}Accent`]?.[500] : colors.grey[500],
          borderRadius:"10px",
          marginBottom:'3px'
      })}
      >
        <ListItemIcon sx={{minWidth:'35px'}}>
          <AccountCircleIcon  style={{ color: 'inherit' }} />
        </ListItemIcon>
        {!isCollapsed && <ListItemText primary="User" />}
       </StyledListItemButton>
        </ListItem> */}

          <ListItem
            key="Product"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("product")}
              component={NavLink}
              to="/products"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <DryCleaningIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Product" />}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="Order"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("order")}
              component={NavLink}
              to="/orders"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ShoppingBagIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Order" />}
            </StyledListItemButton>
          </ListItem>
          <ListItem
            key="Mail"
            disablePadding
            style={{ padding: !isCollapsed ? "0 5px" : "7px 5px" }}
          >
            <StyledListItemButton
              onClick={() => handleMenuClick("mail")}
              component={NavLink}
              to="/mail"
              end
              className={
                theme.palette.mode === "dark" ? "listItemDark" : "listItemLight"
              }
              style={({ isActive }) => ({
                backgroundColor:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.["hover"]
                    : "transparent",
                color:
                  isActive
                    ? colors[`${colorScheme}Accent`]?.[500]
                    : colors.grey[500],
                borderRadius: "10px",
                marginBottom: "3px",
              })}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <MailIcon style={{ color: "inherit" }} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="Mail" />}
            </StyledListItemButton>
          </ListItem>
        </List>
      </div>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: "none",
          boxShadow: "none",
          borderBottom: `1px solid ${colors.primary["accent"]}`,
          backgroundColor: `${
            theme.palette.mode === "dark"
              ? "#141a2172"
              : " rgba(255, 255, 255, 0.4)"
          } !important`,
          backdropFilter: "blur(5px)",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: "1200",
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
          <Box
            display="flex"
            alignItems="center"
            sx={{ position: "relative" }}
            borderRadius="3px"
          >
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
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                "&:hover": { backgroundColor: "transparent" },
                position: "absolute",
                left: "-30px",
                zIndex: 1300,
              }}
            >
              {/* <MenuIcon /> */}
              {/* KeyboardArrowRightRoundedIcon */}
              {/* import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'; */}

              {!isCollapsed ? (
                <ChevronLeft
                  className="menuIcons"
                  style={{
                    border: `1px solid ${colors.primary["accent"]}`,
                    backgroundColor: colors.primary["bg"],
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <ChevronRight
                  className="menuIcons"
                  style={{
                    border: `1px solid ${colors.primary["accent"]}`,
                    backgroundColor: colors.primary["bg"],
                    borderRadius: "50%",
                  }}
                />
              )}
            </IconButton>
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
            <Tooltip placement="bottom-start">
              <InputBase
                className="inputBox"
                sx={{ ml: 1, flex: 1 }}
                style={{ width: "100%" }}
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
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <NotificationsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Notifications
            </MenuItem>
            <Box>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuItem>
                    <ListItemIcon
                      sx={{ minWidth: "35px" }}
                      onClick={toggleDrawer(anchor, true)}
                    >
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
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <Avatar
                  alt="Travis Howard"
                  style={{ width: "30px", height: "30px", filter: '' }}
                  src={profilepic}
                />
                {/* <PersonOutlinedIcon fontSize="small" /> */}
              </ListItemIcon>
              Profile
            </MenuItem>
          </Menu>
          {/* Icons */}
          <Box display="flex" sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton onClick={() => navigate("/Home")}>
              <Tooltip title="Notification" placement="top-end">
                <HomeRoundedIcon />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Notification" placement="top-end">
                <NotificationsOutlinedIcon />
              </Tooltip>
            </IconButton>
            <Box style={{ display: "flex", alignItems: "center" }}>
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
            </Box>
            <IconButton>
              <Tooltip title="Profile" placement="top-end">
                <Avatar
                  style={{ width: "31px", height: "31px" }}
                  alt="Travis Howard"
                  src={profilepic}
                />
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
        sx={{
          width: { sm: drawerWidth },
          zIndex: "1000",
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
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
              height: "100vh",
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
        <Toolbar sx={{ minHeight: "50px !important" }} className="yoo" />
        <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
