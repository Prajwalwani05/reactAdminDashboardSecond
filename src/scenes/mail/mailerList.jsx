import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import avatar1 from './assets/3d-rendering-zoom-call-avatar.jpg';
import avatar2 from './assets/medium-shot-little-girl-indoors.jpg';
import avatar3 from './assets/3d-cartoon-style-character.jpg';

export default function AlignItemsList({ setMailerMail }) {
  const [active, setActive] = React.useState(1);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChangeMail = (id) => {
    setMailerMail(id);
    setActive(id); // Update state to reflect the active item
  };

  return (
    <List sx={{display:"flex", flexDirection:"column", alignItems:"center", borderRadius: "20px", padding:"5px", width: '25%', bgcolor: colors.primary["bg"],}}>
      {[1, 2, 3].map((id) => (
        <ListItem
          key={id}
          alignItems="flex-start"
          id={id}
          onClick={() => handleChangeMail(id)}
          sx={{
            cursor:"pointer",
            borderRadius: "12px", 
            marginBottom:"5px",
            backgroundColor: active === id ? colors.primary["hover"] : 'inherit', // Apply active background color
            '&:hover': {
              backgroundColor: active === id ? colors.primary["active"] : colors.primary["hover"], // Hover effect
            }
          }}
        >
          <ListItemAvatar>
            <Avatar alt={`Avatar ${id}`} src={id === 1 ? avatar3 : id === 2 ? avatar1 : avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary={id === 1 ? "Summer BBQ" : id === 2 ? "Brunch this weekend?" : "Oui Oui"}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {id === 1 ? "to Scott, Alex, Jennifer" : id === 2 ? "Ali Connors" : "Sandra Adams"}
                </Typography>
                {" — Wish I could come, but I'm out of town this…"} {/* Adjust content as needed */}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
     
    </List>
  );
}
