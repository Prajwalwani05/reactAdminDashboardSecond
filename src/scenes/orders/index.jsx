import { Box } from '@mui/material'
import React from 'react'
import CustomSeparator from '../../components/Header'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Orders = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Orders"} IconComponent={ShoppingBagIcon} />
    </Box>
  )
}

export default Orders;