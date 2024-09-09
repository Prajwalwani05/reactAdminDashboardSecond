import { Box } from '@mui/material'
import React from 'react'
import CustomSeparator from '../../components/Header'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Users = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Users"} IconComponent={AccountCircleIcon} />
    </Box>
  )
}

export default Users