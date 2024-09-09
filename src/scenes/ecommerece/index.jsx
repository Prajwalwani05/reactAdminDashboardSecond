import { Box } from '@mui/material'
import React from 'react'
import CustomSeparator from '../../components/Header'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Ecommerce = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"E-commerece"} IconComponent={ShoppingCartIcon} />
    </Box>
  )
}

export default Ecommerce