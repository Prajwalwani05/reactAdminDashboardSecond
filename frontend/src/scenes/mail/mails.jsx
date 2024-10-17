import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { colorModeContext, tokens } from '../../theme';
import { Avatar, Button, IconButton, ListItem, ListItemAvatar, ListItemText, Typography, useTheme } from '@mui/material';
import { AddPhotoAlternateRounded, ArchiveRounded, AttachFileRounded, CloseRounded, DeleteSweepRounded, FormatAlignCenterRounded, FormatAlignLeftRounded, FormatAlignRightRounded, FormatBoldRounded, FormatItalicRounded, FormatListBulletedRounded, FormatListNumberedRounded, FormatUnderlinedRounded, FullscreenExitRounded, Label, MailRounded, MoreVertRounded, ReplyAllRounded, ReplyRounded, SendRounded, StarRateRounded } from '@mui/icons-material';
import { IoReturnUpForwardOutline } from "react-icons/io5";
import avatar1 from './assets/3d-rendering-zoom-call-avatar.jpg';
import avatar2 from './assets/medium-shot-little-girl-indoors.jpg';
import avatar3 from './assets/3d-cartoon-style-character.jpg';
import BasicSelect from '../../components/selectDropdown';
import './style.css';

export default function Mailbox({mailerMail}) {
  const { colorScheme } = React.useContext(colorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const contentEditableRef = React.useRef(null);

  const handleTextCommand = (command) => {
    document.execCommand(command, false, null);
  };
  const handleTextCommandSelect = (command) => {
    if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P'].includes(command)) {
      document.execCommand('formatBlock', false, command);
    } else {
      document.execCommand(command, false, null);
    }
  };

  const currentdate = new Date();
  const datetime = `${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()} - ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

  return (
    <Box  sx={{ width: '57%',borderRadius: "20px", marginLeft: "10px", bgcolor: colors.primary["bg"], padding: "10px" }}>
     {
      mailerMail === "newMail" ? 
      <>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
        <Box>
          <h2 style={{margin:"0"}}>New message</h2>
        </Box>
        <Box>
        <IconButton sx={{ color: colors.grey[500] }}>
          <FullscreenExitRounded />
        </IconButton>
        <IconButton sx={{ color: colors.grey[500] }}>
          <CloseRounded />
        </IconButton>
        </Box>
      </Box>
      </>
      :
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", padding: "10px", alignItems: "center" }}>
        <IconButton color='warning'>
          <StarRateRounded />
        </IconButton>
        <IconButton color='warning'>
          <Label />
        </IconButton>
        <IconButton sx={{ color: colors.grey[500] }}>
          <ArchiveRounded />
        </IconButton>
        <IconButton sx={{ color: colors.grey[500] }}>
          <MailRounded />
        </IconButton>
        <IconButton sx={{ color: colors.grey[500] }}>
          <DeleteSweepRounded />
        </IconButton>
        <IconButton sx={{ color: colors.grey[500] }}>
          <MoreVertRounded />
        </IconButton>
      </Box>
     }
      <Divider />
      {
        mailerMail === "newMail" 
        ?
        <Box p={1}>
        <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center", padding:"5px", gap:"10px"}}>
          <input style={{color: colors.grey[500]}} type='text' placeholder='To' className='messageInput'/>
          <h5 style={{margin:"0"}}>Cc Bcc</h5>
        </Box>
        <Divider />
        <Box sx={{display:"flex", justifyContent:"flex-start", padding:"5px"}}>
          <input type='text' placeholder='Subject' className='messageInput'/>
        </Box>
        <Divider />
        </Box>
        :
        mailerMail === 1 ? 
        <>
         <Box sx={{ display: "flex", justifyContent: "space-between",padding: "10px", alignItems: "center" }}>
        <Typography variant='h6'>Re: The Future of Renewable Energy: Innovations and Challenges Ahead</Typography>
        <Box>
          <div>
            <IconButton sx={{ color: colors.grey[500] }}>
              <ReplyRounded />
            </IconButton>
            <IconButton sx={{ color: colors.grey[500] }}>
              <ReplyAllRounded />
            </IconButton>
            <IconButton sx={{ color: colors.grey[500] }}>
              <IoReturnUpForwardOutline />
            </IconButton>
          </div>
          <div>
            <span style={{ color: colors.grey[500] }}>{datetime}</span>
          </div>
        </Box>
      </Box>
      <Divider />
      <Box>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  To: demo@minimals.cc, tyrel.greenholt@gmail.com,
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box p={2}>
          Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.
        </Box>
      </Box>
        </>
        :
        mailerMail === 2 ? 
        <>
         <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
        <Typography variant='h6'>Re:d</Typography>
        <Box>
          <div>
            <IconButton sx={{ color: colors.grey[500] }}>
              <ReplyRounded />
            </IconButton>
            <IconButton sx={{ color: colors.grey[500] }}>
              <ReplyAllRounded />
            </IconButton>
            <IconButton sx={{ color: colors.grey[500] }}>
              <IoReturnUpForwardOutline />
            </IconButton>
          </div>
          <div>
            <span style={{ color: colors.grey[500] }}>{datetime}</span>
          </div>
        </Box>
      </Box>
      <Divider />
      <Box>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={avatar1} />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  To: demo@minimals.cc, tyrel.greenholt@gmail.com,
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box p={2}>
          Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.
        </Box>
      </Box>
        </>
        : 
        <>
         <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
        <Typography variant='h6'>Re: The Future of R and Challenges Ahead</Typography>
        <Box>
          <div>
            <IconButton sx={{ color: colors.grey[500] }}>
              <ReplyRounded />
            </IconButton>
            <IconButton sx={{ color: colors.grey[500] }}>
              <ReplyAllRounded />
            </IconButton>
            <IconButton sx={{ color: colors.grey[500] }}>
              <IoReturnUpForwardOutline />
            </IconButton>
          </div>
          <div>
            <span style={{ color: colors.grey[500] }}>{datetime}</span>
          </div>
        </Box>
      </Box>
      <Divider />
      <Box>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  To: demo@minimals.cc, tyrel.greenholt@gmail.com,
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box p={2}>
          Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.
        </Box>
      </Box>
        </>
      }

      
      <Box p={2} sx={{ border: `1px solid ${colors.primary["accent"]}`, display: "flex", flexDirection: "column", gap: "10px", borderRadius: "15px", backgroundColor: colors.primary["card"] }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BasicSelect handleTextCommandSelect={handleTextCommandSelect}/>
          <Divider orientation="vertical" flexItem style={{ margin: "0 10px" }} />
          <IconButton onClick={() => handleTextCommand('bold')}>
            <FormatBoldRounded />
          </IconButton>
          <IconButton onClick={() => handleTextCommand('italic')}>
            <FormatItalicRounded />
          </IconButton>
          <IconButton onClick={() => handleTextCommand('underline')}>
            <FormatUnderlinedRounded />
          </IconButton>
          <Divider orientation="vertical" flexItem style={{ margin: "0 10px" }}/>
          <IconButton onClick={() => handleTextCommand('insertUnorderedList')}>
            <FormatListBulletedRounded />
          </IconButton>
          <IconButton onClick={() => handleTextCommand('insertOrderedList')}>
            <FormatListNumberedRounded />
          </IconButton>
          <Divider orientation="vertical" flexItem style={{ margin: "0 10px" }}/>
          <IconButton onClick={() => handleTextCommand('justifyLeft')}>
            <FormatAlignLeftRounded />
          </IconButton>
          <IconButton onClick={() => handleTextCommand('justifyCenter')}>
            <FormatAlignCenterRounded />
          </IconButton>
          <IconButton onClick={() => handleTextCommand('justifyRight')}>
            <FormatAlignRightRounded />
          </IconButton>
        </Box>
        <Divider />
        <Box>
          <div
            ref={contentEditableRef}
            contentEditable={true}
            style={{
              height: "180px",
              color: colors.grey[100],
              outline: "none",
              fontFamily: "inherit",
              backgroundColor: "transparent",
              border: "none",
              padding: "10px"
            }}
            placeholder="Write something awesome..."
          />
          Write something awesome...
        </Box>
      </Box>
      <Box pt={1}
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <IconButton>
            <AddPhotoAlternateRounded />
            {/* <InputFileUpload icon={<AddPhotoAlternateRounded />} /> */}
          </IconButton>
          <IconButton>
            <AttachFileRounded />
          </IconButton>
        </Box>
        <Box>
          <Button color='inherit' startIcon={<SendRounded  />} variant="outlined" style={{ fontWeight: "600", fontSize: "12px", borderRadius: "10px", padding: "8px" }}>Send</Button>
        </Box>
      </Box>
    </Box>
  );
}
