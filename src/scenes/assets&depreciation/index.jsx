import React from 'react'
import { Box } from '@mui/material'
import CustomSeparator from '../../components/Header'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

const AssestsDepreciation = () => {
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Assets & Depreciation"} IconComponent={FeedOutlinedIcon} />
    </Box>
  )
}

export default AssestsDepreciation