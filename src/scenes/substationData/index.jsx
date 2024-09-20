import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import CustomSeparator from "../../components/Header";
import axios from "axios";
import StickyHeadTable from "./table";
import Loader from "../../components/loader";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import MonthlyInflationChart from "../../components/barChart";
import { colorModeContext, tokens } from "../../theme";
import PieChart from "../../components/pieChart";

const SubstationData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalSubstation, setTotalSubstation] = useState([]);
  const [totalSolarCapacity, setTotalSolarCapacity] = useState([]);
  const [totalLandRequired, setTotalLandRequired] = useState([]);
  const [jmLandArea, setJMLandArea] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pmuportal.mahadiscom.in/api/DistrictWiseSummary/GetAllDistrictSummary"
        );
        console.log("API Response:", response.data);
        setData(response.data);
        const responseData = response.data;
        const totalSubstationsArray = responseData.map(
          (district) => district.TotalSubStation
        );
        const totalSolarCapacitysArray = responseData.map(
          (district) => district.TotalSolarCapacity
        );
        const totalLandRequiredArray = responseData.map(
          (district) => district.TotalLandRequired
        );
        const jmLandAreaArray = responseData.map(
          (district) => district.JM_LAND_AREA
        );

        setTotalSubstation(totalSubstationsArray);
        setTotalSolarCapacity(totalSolarCapacitysArray);
        setTotalLandRequired(totalLandRequiredArray);
        setJMLandArea(jmLandAreaArray);
        console.log(jmLandAreaArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box m="10px">
      <CustomSeparator
        pageName={"DistrictWise Summary"}
        IconComponent={SummarizeOutlinedIcon}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card
                sx={{
                  minWidth: 150,
                  padding: "0",
                  borderRadius: "20px",
                  backgroundColor: colors.primary["specialCards"],
                  backgroundImage: "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingBottom: "0px !important",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: colors[`${colorScheme}Accent`]?.[100],
                      fontWeight: "600",
                    }}
                    gutterBottom
                  >
                    Total Substation
                  </Typography>
                  <Box padding="0" component="div">
                    <MonthlyInflationChart
                      graphColor={colors[`${colorScheme}Accent`]?.[200]}
                      dataValues={totalSubstation}
                      height={"150px"}
                      width={"250px"}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  minWidth: 150,
                  padding: "0",
                  borderRadius: "20px",
                  backgroundColor: colors.primary["specialCards"],
                  backgroundImage: "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingBottom: "0px !important",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: colors[`${colorScheme}Accent`]?.[100],
                      fontWeight: "600",
                    }}
                    gutterBottom
                  >
                    Total Solar Capacity
                  </Typography>
                  <Box padding="0" component="div">
                    <MonthlyInflationChart
                      graphColor={colors[`${colorScheme}Accent`]?.[200]}
                      dataValues={totalSolarCapacity}
                      height={"150px"}
                      width={"250px"}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  minWidth: 150,
                  padding: "0",
                  borderRadius: "20px",
                  backgroundColor: colors.primary["specialCards"],
                  backgroundImage: "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingBottom: "0px !important",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: colors[`${colorScheme}Accent`]?.[100],
                      fontWeight: "600",
                    }}
                    gutterBottom
                  >
                    Total Land Required
                  </Typography>
                  <Box padding="0" component="div">
                    <MonthlyInflationChart
                      graphColor={colors[`${colorScheme}Accent`]?.[200]}
                      dataValues={totalLandRequired}
                      height={"150px"}
                      width={"250px"}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  minWidth: 150,
                  padding: "0",
                  borderRadius: "20px",
                  backgroundColor: colors.primary["specialCards"],
                  backgroundImage: "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingBottom: "0px !important",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: colors[`${colorScheme}Accent`]?.[100],
                      fontWeight: "600",
                    }}
                    gutterBottom
                  >
                    JM Land Area
                  </Typography>
                  <Box padding="0" component="div">
                    <MonthlyInflationChart
                      graphColor={colors[`${colorScheme}Accent`]?.[200]}
                      dataValues={jmLandArea}
                      height={"150px"}
                      width={"250px"}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1 }} ml={2} my={3}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                gap: "0px",
                padding: "10px",
                paddingBottom: "0",
                borderRadius: "20px",
              }}
            >
              <StickyHeadTable data={data} />
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SubstationData;
