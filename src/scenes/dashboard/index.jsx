// import { Box } from '@mui/material'
// import React from 'react'
// import Header from '../../components/Header'

// const Dashboard = () => {
//   return (
//     <Box m="10px 20px">
//     <Box display="flex" justifyContent="space-between" alignItems="center">
//     {/* <Header title="Dashboard" subtitle="Welcome to your Dashboard"/> */}
//     </Box>
//     </Box>
//   )
// }

// export default Dashboard
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./style.css";
import Button from "../../components/Button"
import { colorModeContext, tokens } from "../../theme";
import {useTheme } from "@mui/material";
import img from './assets/3d-hygge-top-view-of-colleagues-discussing-work-project.png';
import Gallery from "../../components/carousel";
import BasicCard from "../../components/dashboardCard";
import DonutChart from "../../components/donutChart";
import MultipleBarChart from "../../components/multipleBarChart";
import CustomizedTables from "../../components/table";
import FullWidthTabs from "../../components/tabComponent";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);
  return (
    <Box  m="10px" p="10px">
      {/* <Header title={'Dashboard'} subtitle={"Come let's explore"}/> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8 }>
          <Item className="firstGrid" style={{
            height:'100%',
            background: `${
              colorScheme === "red" 
                ? 'linear-gradient(97deg, rgba(0,0,0,0.95) 20%, rgba(255,5,5,1) 100%)' 
                : colorScheme === "blue" 
                ? 'linear-gradient(97deg, rgba(0,0,0,0.95) 20%, rgba(5,31,255,1) 100%)'
                : colorScheme === "green" 
                ? 'linear-gradient(97deg, rgba(0,0,0,0.95) 20%, rgba(5,255,21,1) 100%)'
                : colorScheme === "yellow"
                ? 'linear-gradient(97deg, rgba(0,0,0,0.95) 20%, rgba(254,255,5,1) 100%)'
                : 'linear-gradient(97deg, rgba(0,0,0,0.95) 20%, rgba(255,5,5,1) 100%)'
            }`,
          }}>

              <Box className="firstGridOverlay">
              <Box className="content">
                  <span >Welcome back 👋 <p >Jaydon Frankie</p></span>
                  <p className="contentLine" >If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
                  <Button name = "Go now"/>
              </Box>
              <Box className="content2" >
                <img src={img} width="250px" alt="image1"/>
              </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4} >
              <Gallery />
          </Grid>
          <Grid item xs={4}>     
              <BasicCard  firstName={"Total active users"} value={"18,765"} percentage={"+2.6% last 7 days"} graph={`${colors.redAccent[300]}`} bg={colors.primary["bg"]}/>
          </Grid>
          <Grid item xs={4}>
          <BasicCard firstName={"Total installed"} value={"4,876"} percentage={"+0.2% last 7 days"} graph={`${colors.greenAccent[200]}`} bg={colors.primary['bg']}/> 
          </Grid>
          <Grid item xs={4}>
          <BasicCard firstName={"Total downloads"} value={"678"} percentage={"-0.1% last 7 days"} graph={`${colors.blueAccent[200]}`} bg={colors.primary['bg']}/> 
          </Grid>
          <Grid item xs={4}>
            <DonutChart />
          </Grid>
          <Grid item xs={8}>
            <MultipleBarChart />
          </Grid>
          <Grid item xs={8}>
            <CustomizedTables />
          </Grid>
          <Grid item xs={4}>
            <FullWidthTabs />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Dashboard;
