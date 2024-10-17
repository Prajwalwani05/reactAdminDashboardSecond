import React from 'react'
import { Box } from '@mui/material'
import CustomSeparator from '../../components/Header'
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Banking = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Banking"} IconComponent={AccountBalanceIcon}/>
      </Box>
  )
}

export default Banking

