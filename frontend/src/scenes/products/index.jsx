import { Box } from '@mui/material'
import React from 'react'
import CustomSeparator from '../../components/Header'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

const Products = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Products"} IconComponent={DryCleaningIcon} />
    </Box>
  )
}

export default Products;