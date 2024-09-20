import { Box } from '@mui/material'
import React from 'react'
import CustomSeparator from '../../../components/Header'
import { AddCircle, HotelRounded } from '@mui/icons-material'

const Create = () => {
  return (
    <Box m="10px">
    <CustomSeparator pageName={"Create"} parentName={"Hotels"} IconComponent={AddCircle} IconComponent2={HotelRounded}/>
    </Box> 
    )
}

export default Create;