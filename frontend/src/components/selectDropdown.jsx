import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({handleTextCommandSelect}) {
  const [myValue, setMyValue] = React.useState('P');

  const handleChange = (event) => {
    setMyValue(event.target.value);
    handleTextCommandSelect(event.target.value);
  };

  return (
    <Box >
      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Font</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={myValue}
          label="Font"
          onChange={handleChange}
        >
          <MenuItem sx={{fontSize:"16px",marginBottom:"2px"}} value={"P"}>Paragraph</MenuItem>
          <MenuItem sx={{fontSize:"30px",marginBottom:"2px"}} value={"H1"}>Heading 1</MenuItem>
          <MenuItem sx={{fontSize:"24px",marginBottom:"2px"}} value={"H2"}>Heading 2</MenuItem>
          <MenuItem sx={{fontSize:"20px",marginBottom:"2px"}} value={"H3"}>Heading 3</MenuItem>
          <MenuItem sx={{fontSize:"18px",marginBottom:"2px"}} value={"H4"}>Heading 4</MenuItem>
          <MenuItem sx={{fontSize:"14px",marginBottom:"2px"}} value={"H5"}>Heading 5</MenuItem>
          <MenuItem sx={{fontSize:"11px",}} value={"H6"}>Heading 6</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
