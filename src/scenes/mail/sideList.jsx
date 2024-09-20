import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import { tokens } from '../../theme';
import { Button, useTheme } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import {  DeleteSweepRounded, MailRounded, SendRounded, WarningRounded } from '@mui/icons-material';

export default function SelectedListItem({setMailerMail}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '17%', bgcolor: colors.primary["accent"], padding:"10px"}}>
      <List component="nav" aria-label="main mailbox folders">
      <Button onClick={()=> setMailerMail("newMail")} fullWidth startIcon={<CreateIcon sx={{color: colors.grey[900]}} />} variant="contained" style={{fontWeight:"700",fontSize:"14px", backgroundColor:colors.grey[100], marginBottom:"20px", borderRadius:"10px", padding:"8px"}}>Compose</Button>
        <ListItemButton
        sx={{borderRadius:"10px", marginBottom:"4px"}}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon sx={{minWidth:"35px"}}>
            <MailRounded />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          <ListItemText primary="3" sx={{textAlign: "right"}}/>
        </ListItemButton>
        <ListItemButton
        sx={{borderRadius:"10px" , marginBottom:"4px"}}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon sx={{minWidth:"35px"}}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
          <ListItemText primary="1" sx={{textAlign: "right"}}/>
        </ListItemButton>
        <ListItemButton
        sx={{borderRadius:"10px" , marginBottom:"4px"}}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon sx={{minWidth:"35px"}}>
            <SendRounded />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
        sx={{borderRadius:"10px" , marginBottom:"4px"}}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
            <ListItemIcon sx={{minWidth:"35px"}}>
            <DeleteSweepRounded />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
        sx={{borderRadius:"10px" , marginBottom:"4px"}}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
            <ListItemIcon sx={{minWidth:"35px"}}>
            <WarningRounded />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
  );
}