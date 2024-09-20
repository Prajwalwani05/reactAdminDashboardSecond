import React, { useState } from 'react'
import { Box, Grid, useTheme } from '@mui/material'
import AlignItemsList from './mailerList'
import { tokens } from '../../theme'
import SelectedListItem from './sideList'
import Mailbox from './mails'
import CustomSeparator from '../../components/Header'
import MailIcon from '@mui/icons-material/Mail';

const Mail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [mailerMail, setMailerMail] = useState(1);
    console.log(mailerMail)
  return (
    <Box m="10px">
      <CustomSeparator pageName={"Mail"} IconComponent={MailIcon}/>
        <Box sx={{ flexGrow: 1 }} p={1}>
        <Grid container spacing={2} sx={{display:"flex", gap:"0px", backgroundColor:colors.primary["accent"], padding:"10px", borderRadius:"20px", width:"100%"}}>
            <SelectedListItem setMailerMail={setMailerMail}/>
            <AlignItemsList setMailerMail={setMailerMail} />
            <Mailbox mailerMail={mailerMail} />
        </Grid>   
      </Box>
    </Box>
  )
}

export default Mail