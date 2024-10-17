import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./style.css";
import Button from "../../components/Button";
import { colorModeContext, tokens } from "../../theme";
import { Card, CardContent, Divider, Typography, useTheme } from "@mui/material";
import Gallery from "../../components/carousel";
import BasicCard from "../../components/dashboardCard";
import DonutChart from "../../components/donutChart";
import MultipleBarChart from "../../components/multipleBarChart";
import CustomizedTables from "../../components/table";
import FullWidthTabs from "../../components/tabComponent";
import img1 from './assets/image1.png';
import img2 from './assets/image2.png';
import img3 from './assets/image3.png';
import img4 from './assets/image4.png';
import BasicCard2 from "../../components/ecommerceCard";
import RadialChart from "../../components/radialBar";
import { Circle } from "@mui/icons-material";
import LineChart from "../../components/lineChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
 const lineChartData1 = [400, 530, 448, 800, 540, 580, 690, 300, 1200, 280]
 const lineChartData2 = [10, 200, 1000, 800, 540, 540, 580, 690, 300, 100, 280]
 const lineChartData3 = [540, 580, 690, 300, 100, 280]
const items = [
  {
      name: "First App",
      description: "The Rise of Remote Work: Benefits, Challenges, and Future Trends",
      img: img1,
  },
  {
      name: "Second App",
      description: "Understanding Blockchain Technology: Beyond Cryptocurrency",
      img: img2,
  },
  {
      name: "Third App",
      description: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
      img: img3,
  },
  {
    name: "Third App",
    description: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
    img: img4,
}
];

const Ecommerce = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);
  return (
    <Box m="10px" p="10px">
      {/* <Header title={'Ecommerce'} subtitle={"Come let's explore"}/> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={8}>
            <Item
              className="firstGrid"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              }}
            >
              <Box className="firstGridOverlay" px={5} py={4}>
                <Box className="content">
                  <span>
                  Congratulations 🎉
                    <p>Jaydon Frankie</p>
                  </span>
                  <p className="contentLine">
                  Jaydon Frankie
                  Best seller of the month you have done 57.6% more sales today.
                  </p>
                  <Button name="Go now" />
                </Box>
                <Box className="content2">
                  {/* <img src={img} width="250px" alt="image1"/> */}
                  <svg
                    width="250"
                    height="250"
                    class="MuiBox-root css-1n01egw"
                    viewBox="0 0 480 360"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href="https://assets.minimals.cc/public/assets/illustrations/characters/character-2.webp"
                      height="300"
                      x="322"
                      y="30"
                    ></image>
                    <path
                      fill="url(#paint0_linear_1_43)"
                      d="M216.3 138v108.3c0 2.2-1.8 4-4 4H195c-2.2 0-4-1.8-4-4V138c0-2.2 1.8-4 4-4h17.3c2.2 0 4 1.8 4 4zm-55-68H144c-2.2 0-4 1.8-4 4v176.3c0 2.2 1.8 4 4 4h17.3c2.2 0 4-1.8 4-4V74c0-2.2-1.8-4-4-4zm102 93H246c-2.2 0-4 1.8-4 4v75.7c0 2.2 1.8 4 4 4h17.3c2.2 0 4-1.8 4-4V167c0-2.2-1.8-4-4-4z"
                    ></path>
                    <path
                      fill={colors[`${colorScheme}Accent`]?.[500]}
                      d="M359.2 253.4c-1.1 3.1-2.3 6.3-3.7 9.7-5.1.1-10.1.3-15.2.4-3.3.1-6.9.2-9.6 2.1-5.2 3.6-.7 6.1-1.3 9.6-.7 4.2-4.9 5.1-9 5.1-14.1.1-27.7 4.6-41.5 7.3s-28.9 3.5-41.2-3.4c-.8-.5-1.7-1-2-2-.6-1.6.9-3.2 2.3-4.2 3.2-2.2 6.7-3.7 10.5-4.5 2.2-.5 4.5-.8 6.5-2 1.9-1.2 3.3-3.7 2.3-5.8-32.1 2-64.1 4.8-96 8.4-41.1 4.8-81.8 12.9-123 15.9h-.4c-2.9-2.9-5.5-6-7.9-9.3.2-.2.4-.5.6-.7 2-2.2 5-3.2 7.8-4.1 15.9-4.9 32.4-7.4 48.8-9.9 81.6-12.3 164.2-21.1 246.8-15.3 8.4.6 16.8 1.5 25.2 2.7z"
                      opacity="0.24"
                    ></path>
                    <path
                      fill="#DFE3E8"
                      d="M81.7 204.2l74 11v60.7h8.5v3.6h-19.5v-2.3h8.7v-50.3l-70-13.5v49h9.7v1.7H73.6V262h8.2v-57.8h-.1z"
                    ></path>
                    <path
                      fill="#C4CDD5"
                      d="M80.6 204.2l74 11v60.7h8.5v3.6h-19.5v-2.3h8.7v-50.3l-70-13.5v49H92v1.7H72.4V262h8.2v-57.8z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_43"
                        x1="140"
                        x2="276.5"
                        y1="98"
                        y2="312.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color={colors[`${colorScheme}Accent`]?.[500]}></stop>
                        <stop
                          offset="1"
                          stop-color={colors[`${colorScheme}Accent`]?.[400]}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Gallery items={items} />
          </Grid>
          <Grid item xs={4}>
            <BasicCard2
              firstName={"Total active users"}
              value={"18,765"}
              lineChartData1={lineChartData1}
              percentage={"+2.6% last 7 days"}
              linecolor={[`${colors.redAccent[200]}`]}
              bg={colors.primary["specialCards"]}
            />
          </Grid>
          <Grid item xs={4}>
            <BasicCard2
              firstName={"Total installed"}
              value={"4,876"}
              lineChartData1={lineChartData2}
              percentage={"+0.2% last 7 days"}
              linecolor={[`${colors.greenAccent[200]}`]}
              bg={colors.primary["specialCards"]}
            />
          </Grid>
          <Grid item xs={4}>
            <BasicCard2
              firstName={"Total downloads"}
              value={"678"}
              lineChartData1={lineChartData3}
              percentage={"-0.1% last 7 days"}
              linecolor={[`${colors.blueAccent[200]}`]}
              bg={colors.primary["specialCards"]}
            />
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ padding: "0", borderRadius: "20px",backgroundImage:'none', backgroundColor: `${colors.primary["specialCards"]}` }}>
            <CardContent sx={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", paddingBottom:'16px !important' }}>
              <Box width="100%" display="flex" flexDirection="column" gap="6px">
                <h2 style={{margin:'0'}}>Sale by gender</h2>
                <RadialChart OffsetValue={5}  valueFontSize={'14px'} size={45} color={[colors[`${colorScheme}Accent`]?.[500], colors.yellowAccent[500], colors.redAccent[500]] } gradientColor={[colors[`${colorScheme}Accent`]?.[300]]} value={['34', '52', '80']} height1={320} width={320}/>
                <Divider />
                <Box mt={1} display="flex" justifyContent="space-evenly" alignItems="center">
                  <Box display="flex" gap="5px" alignItems="center">
                    <Circle style={{color: colors[`${colorScheme}Accent`]?.[500]}}/>
                    <Typography>Men</Typography>
                  </Box>
                  <Box display="flex" gap="5px" alignItems="center">
                    <Circle style={{color: colors.yellowAccent[500]}}/>
                    <Typography>Womens</Typography>
                  </Box>
                  <Box display="flex" gap="5px" alignItems="center">
                    <Circle style={{color: colors.redAccent[500]}}/>
                    <Typography>Kids</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={8}>
          <Card sx={{ padding: "0", borderRadius: "20px",backgroundImage:'none', backgroundColor: `${colors.primary["specialCards"]}` }}>
            <CardContent sx={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", paddingBottom:'16px !important' }}>
              <Box width="100%" display="flex" flexDirection="column" gap="6px">
                <h2 style={{margin:'0'}}>Sale by gender</h2>
                <LineChart lineChartData1={lineChartData1} lineChartData2={lineChartData2} linecolor={[colors.yellowAccent[500], colors.greenAccent[500]]} height={'250px'} width={'100%'}/>
                <Divider />
                {/* <Box mt={1} display="flex" justifyContent="space-evenly" alignItems="center">
                  <Box display="flex" gap="5px" alignItems="center">
                    <Circle style={{color: colors[`${colorScheme}Accent`]?.[500]}}/>
                    <Typography>Men</Typography>
                  </Box>
                  <Box display="flex" gap="5px" alignItems="center">
                    <Circle style={{color: colors.yellowAccent[500]}}/>
                    <Typography>Womens</Typography>
                  </Box>
                  <Box display="flex" gap="5px" alignItems="center">
                    <Circle style={{color: colors.redAccent[500]}}/>
                    <Typography>Kids</Typography>
                  </Box>
                </Box> */}
              </Box>
            </CardContent>
          </Card>

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
export default Ecommerce;
