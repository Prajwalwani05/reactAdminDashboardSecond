// import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { colorModeContext, tokens } from '../../theme';
// import { useTheme } from '@mui/material';
// import Button from '@mui/material/Button';
// import CreateIcon from '@mui/icons-material/Create';
// import { Color } from 'devextreme-react/cjs/chart';
// import { Delete, DeleteForeverRounded, DraftsRounded, Mail, MailLockRounded, MailRounded, SendRounded, StairsTwoTone, StarRounded, StarsTwoTone, StartSharp, StarTwoTone, Warning, WarningRounded } from '@mui/icons-material';
// import { BsTrash } from 'react-icons/bs';

// export default function NestedList() {
//     const [selectedIndex, setSelectedIndex] = React.useState(1);
//   const [open, setOpen] = React.useState(true);
//   const { colorScheme } = React.useContext(colorModeContext);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const handleClick = () => {
//     setOpen(!open);
//   };
//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <List
//       sx={{ width: '100%', maxWidth: 200, bgcolor: colors.primary["accent"], padding:"10px"}}
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <Button startIcon={<CreateIcon sx={{color: colors.grey[500]}}  />} variant="contained" style={{fontWeight:"700", backgroundColor:colors.grey[100], marginBottom:"10px"}}>Compose</Button>
//       }
//     >
//       <ListItemButton sx={{borderRadius:"10px"}}>
//         <ListItemIcon>
//           <MailRounded />
//         </ListItemIcon>
//         <ListItemText primary="All" />
//       </ListItemButton>
//       <ListItemButton sx={{borderRadius:"10px"}}>
//         <ListItemIcon>
//           <DraftsRounded />
//         </ListItemIcon>
//         <ListItemText primary="Drafts" />
//       </ListItemButton>
//       <ListItemButton sx={{borderRadius:"10px"}} onClick={handleClick}>
//         <ListItemIcon >
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{borderRadius:"10px", pl: 4}}>
//             <ListItemIcon>
//               <StarRounded />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//           <ListItemButton sx={{borderRadius:"10px", pl: 4}}>
//             <ListItemIcon>
//               <WarningRounded />
//             </ListItemIcon>
//             <ListItemText primary="Spam" />
//           </ListItemButton>
//           <ListItemButton sx={{borderRadius:"10px", pl: 4}}>
//             <ListItemIcon>
//               <DeleteForeverRounded />
//             </ListItemIcon>
//             <ListItemText primary="Trash" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <ListItemButton sx={{borderRadius:"10px"}}>
//         <ListItemIcon>
//         <SendRounded />
//         </ListItemIcon>
//         <ListItemText primary="Sent" />
//       </ListItemButton>
//     </List>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { colorModeContext, tokens } from '../../theme';
import { Button, useTheme } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { DeleteRounded, DeleteSweepRounded, MailRounded, SendRounded, WarningAmber, WarningRounded } from '@mui/icons-material';

export default function SelectedListItem({setMailerMail}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { colorScheme } = React.useContext(colorModeContext);
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