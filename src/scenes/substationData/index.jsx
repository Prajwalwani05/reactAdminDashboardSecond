import React, { useEffect, useState } from 'react'
    import { Box, Grid, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import CustomSeparator from '../../components/Header'
import axios from 'axios'
import StickyHeadTable from './table'
import Loader from '../../components/loader'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

const SubstationData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://pmuportal.mahadiscom.in/api/DistrictWiseSummary/GetAllDistrictSummary');
              console.log('API Response:', response.data);
              setData(response.data);
              setLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              setLoading(false);
            }
          };
      fetchData();
    }, [])
    

    return (
    <Box m="10px">
      <CustomSeparator pageName={"DistrictWise Summary"} IconComponent={SummarizeOutlinedIcon} />
        <Box sx={{ flexGrow: 1 }} p={1}>
            {
                loading ? <Loader />
                : 
            <Grid container spacing={2} sx={{display:"flex", gap:"0px", padding:"10px", paddingBottom:'0', borderRadius:"20px", width:"100%"}}>
            <StickyHeadTable data={data}/>
            </Grid>   
            }
      </Box>
    </Box>
  )
}

export default SubstationData