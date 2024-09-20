import * as React from 'react';
import { Button, InputBase, styled, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CustomSeparator from '../../components/Header';
import { colorModeContext, tokens } from '../../theme';
import axios from 'axios';
import { Search } from '@mui/icons-material';
import Loader from '../../components/loader';
import blueImg from './assets/hotel.png';
import redImg from './assets/hotel (1).png';
import greenImg from './assets/hotel (2).png';
import yellowImg from './assets/hotel (4).png';
import blueProperty from './assets/property.png';
import redProperty from './assets/property (1).png';
import greenProperty from './assets/property (2).png';
import yellowProperty from './assets/property (3).png';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DonutChart from '../../components/smallDonutChart';
import dayjs from 'dayjs';
import MediaCard from './hotelCard';
import { HotelRounded } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
  textAlign: "center",
  width:'100%', height:'100%',
  display:'flex', gap:'20px',alignItems:"center", justifyContent:"space-between", borderRadius:"15px"
}));

export default function BasicGrid() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("Mumbai");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);
  const [checkIn, setCheckIn] = React.useState(dayjs('2024-09-17'));
  const [checkOut, setCheckOut] = React.useState(dayjs('2024-09-20'));

  const fetchData = async () => {
    try {
      // Format checkIn and checkOut to 'YYYY-MM-DD'
      const formattedCheckIn = checkIn.format('YYYY-MM-DD');
      const formattedCheckOut = checkOut.format('YYYY-MM-DD');
  
      const response = await axios.get(`https://serpapi.com/search.json?engine=google_hotels&q=${searchValue}&check_in_date=${formattedCheckIn}&check_out_date=${formattedCheckOut}&adults=2&currency=INR&gl=us&hl=en&api_key=d0d078015d0581e944506ddaf40e24a88e887b976f6b2c55db6349193d70a847`);
      console.log('API Response:', response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  
  React.useEffect(() => {
  
      fetchData();
  }, [searchValue, checkIn, checkOut])

  
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const handleSearch = () => {
    console.log(searchValue);
  };
  return (
    <>
    {
        loading ? <Loader />
        :

    <Box m="10px" sx={{ flexGrow: 1 }}>
      <CustomSeparator pageName={"Hotels"} IconComponent={HotelRounded}/>
      <Grid sx={{display:"flex" , gap:"10px", alignItems:'center'}}>
      <Box p={1} sx={{width: "30%" , border:`1px solid ${colors.grey[800]}`, borderRadius:"7px", display:"flex", justifyContent:"center", gap:"10px", alignItems:'center'}}>
        <Search />
      <InputBase
              className="inputBox"
                sx={{flex: 1 }}
                style={{}}
                placeholder="Search for Hotels..."
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
                }}
              />
      </Box>
      <Box >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
      <DatePicker
          label="Check In"
          value={checkIn}
          onChange={(newValue) => setCheckIn(newValue)}
        />
        </DemoContainer>
    </LocalizationProvider>
      </Box>
      <Box >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
      <DatePicker
          label="Check Out"
          value={checkOut}
          onChange={(newValue) => setCheckOut(newValue)}
        />
        </DemoContainer>
    </LocalizationProvider>
      </Box>
      <Button variant='contained' size='medium' onClick={fetchData}>Search</Button>
      </Grid>
      <Grid my={0.5} container spacing={2}> 
      <Grid item xs={14} sm={12} md={6} lg={4} xl={4}>
        <Item style={{display:'flex', gap:'20px',alignItems:"center", justifyContent:"space-between", borderRadius:"20px",}}>
          <div style={{display:'flex', flexDirection:"column", gap:"20px", alignItems:"space-between"}}>
          <Typography variant='h4'>
            Hotel Brands
          </Typography> 
          <Typography variant='h1' sx={{color:`${colors.primary[500]}`, fontWeight:"600"}}  gutterBottom>
            {data?.brands?.length || 0} {/* Safely access the length */}
          </Typography>
          </div>
          <div>
          <img
            width={100}
            src={colorScheme === 'blue' ?  blueImg : colorScheme === 'red' ? redImg : colorScheme === 'yellow' ? yellowImg : greenImg}
            alt="hotelimg"
          />          
          </div>
          {/* {data?.brands?.map((brand, index) => (
            <Box key={brand.id} my={1}>
              <Typography variant="body1">{`${index + 1}. ${brand.name}`}</Typography>
            </Box>
          ))} */}
        </Item>
      </Grid>
      <Grid item xs={14} sm={12} md={6} lg={4} xl={4}>
        {/* <Item style={{display:'flex', gap:'20px',alignItems:"center", justifyContent:"space-between", borderRadius:"20px",}}>
          <DonutChart />
        </Item> */}
        <DonutChart value1={data?.brands?.length || 0} value2={data?.properties?.length || 0}/>
        </Grid>
        <Grid item xs={14} sm={12} md={6} lg={4} xl={4}>
        <Item style={{display:'flex', gap:'20px',alignItems:"center", justifyContent:"space-between", borderRadius:"20px",}}>
          <div style={{display:'flex', flexDirection:"column", gap:"20px", alignItems:"space-between"}}>
          <Typography variant='h4' >
            Hotel Properties
          </Typography> 
          <Typography  variant='h1' sx={{color:`${colors.primary[500]}`, fontWeight:"600"}}  gutterBottom>
            {data?.properties?.length || 0} {/* Safely access the length */}
          </Typography>
          </div>
          <div>
          <img
            width={100}
            src={colorScheme === 'blue' ?  blueProperty : colorScheme === 'red' ? redProperty : colorScheme === 'yellow' ? yellowProperty : greenProperty}
            alt="hotelimg"
          />          
          </div>
          {/* {data?.brands?.map((brand, index) => (
            <Box key={brand.id} my={1}>
              <Typography variant="body1">{`${index + 1}. ${brand.name}`}</Typography>
            </Box>
          ))} */}
        </Item>
        </Grid>
      </Grid>
      <Grid my={0.5} container spacing={2}>
      {data?.properties?.map((property, index) => (
      <Grid item xs={14} sm={12} md={6} lg={4} xl={4}>
        <Item2 key={property.id} >
          <MediaCard name={property.name} description={property.description} images={property.images} ratings={property.overall_rating} website={property.link}/>
        </Item2>
        </Grid>
        
       ))}
      </Grid>
    </Box>
    }
    </>
  );
}
