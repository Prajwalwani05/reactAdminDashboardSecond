import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header';
import { Box, Button, Divider, Grid, List, ListItem, ListItemText, Modal, useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../../theme';
import './style.css';
import { IoIosCloudUpload } from "react-icons/io";
import { DeleteSweepRounded, FileCopyRounded, UploadFileRounded } from '@mui/icons-material';
import PdfViewer from './pdfViewer';
import axios from 'axios';
import ApexChart from './chart';
import CustomSeparator from '../../components/Header';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


const InputUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {colorScheme} = useContext(colorModeContext)
  const [open, setOpen] = React.useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  useEffect(() => {
    // Fetch files from server when the component mounts
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/files');
        setUploadedFiles(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleOpen = (index) => {
    setSelectedFileIndex(index);
    setOpen(true);
  };
  const handleOpenDb = (index) => {
    setSelectedFileIndex(index);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedFileIndex(null);
  };

  const handleFileChange = (e) => {
    setFiles(prevFiles => [...prevFiles, ...Array.from(e.target.files)]);
  };

  const handleDelete = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleDeleteDb = async (index) => {
    const filename = uploadedFiles[index]?.filename;

    try {
      // Delete file from server
      await axios.delete(`http://localhost:5000/files/${filename}`);

      // Re-fetch files from server
      const response = await axios.get('http://localhost:5000/files');
      setUploadedFiles(response.data);
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Error deleting file');
    }
  };

  const handleUpload = async (index) => {
    const formData = new FormData();
    formData.append('file', files[index]);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      // Re-fetch files after uploading
      const response = await axios.get('http://localhost:5000/files');
      setUploadedFiles(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '1100px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto', // Added to handle overflow
  };

  const fileNameLength = (fileName) => {
    const maxLength = 40;
    let baseName = fileName.slice(0, fileName.lastIndexOf('.'));
    let secondName = fileName.substring(fileName.length - 10)
    if (baseName.length > maxLength) {
      baseName = baseName.slice(0, maxLength) + '...';
    }
    return baseName + " " + secondName;
  };

  return (
    <Box m="10px">
      <CustomSeparator pageName={"Input Data Upload"} IconComponent={CloudUploadOutlinedIcon}/>
      <Box sx={{ display: "flex",justifyContent:"space-evenly", alignItems: "center",width:"100%", gap: "20px", borderRadius: "20px", backgroundColor: colors.primary["card"] }} p={2}>
        <Box>
          <label
            htmlFor="file"
            className="labelFile"
            style={{ borderRadius: "15px", color: colors.grey[100],  }}
          >
            <span>
              <IoIosCloudUpload className='cloudIcon' style={{ color: colors.primary[100] }} />
            </span>
            <p>Drag and drop your file here or click to select a file!</p>
          </label>
          <input className="input" name="file" id="file" type="file" multiple onChange={handleFileChange} />
        </Box>
        <Divider orientation="vertical" flexItem style={{ margin: "0 10px" }}/>
        <Box sx={{display:"flex", justifyContent:"center"}}>
        <ApexChart />
      </Box>     
      </Box>
      <Grid item lg={12} md={6}>
          <List>
            {files.length > 0 ? <ListItemText sx={{color: colors[`${colorScheme}Accent`]?.[500], backgroundColor:colors[`${colorScheme}Accent`]?.["hover"], padding:"5px 8px",borderRadius:"10px", width:"max-content"}}>New Files</ListItemText> : null}
            {files.length > 0 ?
              files.map((file, index) => (
                <ListItem key={index} style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                  <Box className="flex">
                    <span>{index + 1} ) </span>
                    <ListItemText
                      primary={fileNameLength(file.name)}
                    />
                  </Box>
                  <Box>
                    <Button sx={{ marginRight: "10px" }} color='success' size='small' variant="outlined" startIcon={<FileCopyRounded />} onClick={() => handleOpen(index)}>View</Button>
                    <Button sx={{ marginRight: "10px" }} color='error' size='small' variant="outlined" startIcon={<DeleteSweepRounded />} onClick={() => handleDelete(index)}>Remove</Button>
                    <Button color='info' size='small' variant="outlined" startIcon={<UploadFileRounded />} onClick={() => handleUpload(index)}>Upload</Button>
                  </Box>
                </ListItem>
              ))
              :
              <ListItemText primary="" />
            }
          </List>
          <List>
          <ListItemText sx={{color: colors[`${colorScheme}Accent`]?.[500], backgroundColor:colors[`${colorScheme}Accent`]?.["hover"], padding:"5px 8px",borderRadius:"10px", width:"max-content"}}>Files from database</ListItemText>

            {uploadedFiles.length > 0 ?
              uploadedFiles.map((upfile, index) => (
                <ListItem key={index} style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                  <Box className="flex">
                    <span>{index + 1} ) </span>
                    <ListItemText
                      primary={upfile.originalName}
                    />
                  </Box>
                  <Box>
                    <Button sx={{ marginRight: "10px" }} color='success' size='small' variant="outlined" startIcon={<FileCopyRounded />} onClick={() => handleOpenDb(index)}>View</Button>
                    <Button sx={{ marginRight: "10px" }} color='error' size='small' variant="outlined" startIcon={<DeleteSweepRounded />} onClick={() => handleDeleteDb(index)}>Remove</Button>
                    {/* <Button color='info' size='small' variant="outlined" startIcon={<UploadFileRounded />} onClick={() => handleUpload(index)}>Upload</Button> */}
                  </Box>
                </ListItem>
              ))
              :
              <ListItemText primary="No files in database" />
            }
          </List>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selectedFileIndex !== null && (
              // `http://localhost:5000/uploads/${uploadedFiles[selectedFileIndex]}`
              // dbFileUrl={`http://localhost:5000/uploads/${uploadedFiles[selectedFileIndex]}`} fileUrl={URL.createObjectURL(files[selectedFileIndex])}  selectedFile={files[selectedFileIndex]} onClose={handleClose} 
              <PdfViewer
              dbFileUrl={`http://localhost:5000/uploads/${uploadedFiles[selectedFileIndex].filename}`}
              fileUrl={files[selectedFileIndex] ? URL.createObjectURL(files[selectedFileIndex]) : null}  
              selectedFile={files[selectedFileIndex]} 
              uploadedFile = {uploadedFiles[selectedFileIndex]}
              onClose={handleClose} 
               />
            )}
          </Box>
        </Modal>
      
    </Box>
  );
};

export default InputUpload;
