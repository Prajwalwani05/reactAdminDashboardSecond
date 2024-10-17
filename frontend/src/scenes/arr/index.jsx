import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { GridRowModes, DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons,} from '@mui/x-data-grid';
import { Grid, Snackbar, useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../../theme';
import SelectVariants from './dropdown';
import axios from 'axios';
import CustomSeparator from '../../components/Header';

const EditToolbar = (props) => {
  const { setRows, setRowModesModel } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);

  const handleClick = async () => {
    const id = Math.random().toString(36).substr(2, 9); // Generate a random ID
    const newRecord = { id, name: '', age: '', joinDate: new Date().toISOString().split('T')[0], role: '', isNew: true };
  
    setRows((oldRows) => [...oldRows, newRecord]);
  
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
   };
  

   
  return (
    <GridToolbarContainer>
      <Button style={{ color: colors[`${colorScheme}Accent`]?.[200], fontWeight: "700" }} startIcon={<AddIcon />} onClick={handleClick}>
        Add record  
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [saveAlertOpen, setSaveAlertOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true); // Loading state
  const apiUrl = process.env.REACT_APP_API_URL;
  // const apiUrl = 'http://localhost:5700';
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/traders`); // Fetch data from backend
        const mappedData = response.data.map((row) => ({
          ...row,
          id: row._id || Math.random().toString(36).substr(2, 9), // Ensure unique ID
        }));
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setRows(mappedData);
      } catch (error) {
        // setError(error);
        setLoading(false); 
      }
    };
    
  
    fetchData();
  }, []);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleSaveClick = (id) => async () => {
    setSaveAlertOpen(true);
    const updatedRow = rows.find((row) => row.id === id);
    
    if (!updatedRow) {
      console.error('Row not found:', id);
      return;
    }
    
    try {
      if (updatedRow.isNew) {
        // Save new record
        await axios.post(`${apiUrl}/traders`, updatedRow);
        setRows((prevRows) => prevRows.map((row) =>
          row.id === id ? { ...updatedRow, isNew: false } : row
        ));
      } else {
        // Update existing record
        await axios.put(`${apiUrl}/traders/${id}`, updatedRow);
        setRows((prevRows) => prevRows.map((row) =>
          row.id === id ? updatedRow : row
        ));
      }
      
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.View },
      }));
    } catch (error) {
      console.error('Error saving record:', error);
    }
  };
  

  const handleDeleteClick = (id) => () => {
    setAlertOpen(true);
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };
  const processRowUpdate = (newRow) => {
    console.log('Processing row update:', newRow);
  
    const updatedRow = { ...newRow, isNew: false };
  
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) =>
        row.id === updatedRow.id ? updatedRow : row
      );
  
      console.log('Updated rows state:', updatedRows);
      return updatedRows;
    });
  
    return updatedRow;
  };
  
  
  
  
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 400, editable: true },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'text',
      width: 200,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Department',
      width: 260,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  
  return (
    <Box
    m="10px"
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
     <CustomSeparator pageName={"ARR"} IconComponent={SummarizeOutlinedIcon}/>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert sx={{ width: '100%' }} onClose={() => setAlertOpen(false)} severity="error">Record deleted</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={saveAlertOpen}
        autoHideDuration={6000}
        onClose={() => setSaveAlertOpen(false)}
      >
        <Alert sx={{ width: '100%' }} onClose={() => setSaveAlertOpen(false)} severity="success">Record Saved</Alert>
      </Snackbar>
      <Grid item xs={6}>
        <SelectVariants />
      </Grid>
      <DataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => row.id}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
          loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
          },
        }}
        sx={{
          width: '100%',
          height: '100%', // Ensure it takes the full height
        }}
      />
    </Box>
  );
}

