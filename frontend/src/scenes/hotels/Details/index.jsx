import { Box } from '@mui/material'
import React from 'react'
import CustomSeparator from '../../../components/Header'
import { HotelRounded, Info } from '@mui/icons-material'

const Details = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Details"} parentName={"Hotels"} IconComponent={Info} IconComponent2={HotelRounded}/>
    </Box>  
    )
}

export default Details