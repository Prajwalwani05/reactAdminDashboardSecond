import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../../theme';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'DIST_CODE', label: 'District Code', minWidth: 100 },
  { id: 'DIST_NAME', label: 'District Name', minWidth: 170 },
  { id: 'TotalSubStation', label: 'Total SubStation', minWidth: 100 },
  { id: 'TotalSolarCapacity', label: 'Total Solar Capacity', minWidth: 100 },
  { id: 'TotalLandRequired', label: 'Total Land Required', minWidth: 100 },
  { id: 'JM_LAND_AREA', label: 'JM LAND AREA', minWidth: 100 },
  { id: 'TotalLandRequiredwith_5_tolerance', label: 'Total Land Required with 5 tolerance', minWidth: 170 },
  { id: 'view', label: 'View', minWidth: 100 }
];

export default function StickyHeadTable({ data = [] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filteredData, setFilteredData] = React.useState(data);
  const [filters, setFilters] = React.useState({ districtName: '', totalSubStation: '' });
  const [isSortedAsc, setIsSortedAsc] = React.useState(false); // State for sorting

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);
  const navigate = useNavigate();

  // Handle view button click
  const handleViewClick = (id) => {
    navigate(`/districtWiseSummary/districtDetails/${id}`); // Navigate to details page with id
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Update filters based on input change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  // Sort data by TotalSubStation (ascending)
  const sortDataByTotalSubStation = () => {
    const sorted = [...filteredData].sort((a, b) => {
      return isSortedAsc
        ? b.TotalSubStation - a.TotalSubStation // Descending if already sorted ascending
        : a.TotalSubStation - b.TotalSubStation; // Ascending by default
    });
    setFilteredData(sorted);
    setIsSortedAsc(!isSortedAsc); // Toggle sort state
  };

  // Filter data based on user input
  React.useEffect(() => {
    const filtered = data.filter((row) => {
      const matchesDistrictName = row.DIST_NAME.toLowerCase().includes(filters.districtName.toLowerCase());
      const matchesTotalSubStation = filters.totalSubStation
        ? row.TotalSubStation >= parseFloat(filters.totalSubStation)
        : true;

      return matchesDistrictName && matchesTotalSubStation;
    });

    setFilteredData(filtered);
  }, [data, filters]);

  return (
    <>
      {/* Filter Inputs */}
      <div style={{ display: 'flex',justifyContent:'flex-end', alignItems:'center',width:'100%', gap: '10px', marginBottom: '10px' }}>
        <TextField
          label="FILTER BY DISTRICT NAME"
          variant="outlined"
          size='small'
          name="districtName"
          value={filters.districtName}
          onChange={handleFilterChange}
          sx={{
            color:'#8AC1EE',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              color: '#8AC1EE',
            },
            '& .MuiFormLabel-root': {
              color: '#8AC1EE'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '0.1px solid #8AC1EE',
            },
            '& .MuiOutlinedInput-notchedOutline legend span': {
              color: '#8AC1EE',
            },
          }}
        />
        {/* <TextField
          label="Filter by Minimum Total SubStation"
          variant="outlined"
          size='small'
          name="totalSubStation"
          type="number"
          value={filters.totalSubStation}
          onChange={handleFilterChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        /> */}
        <Button
          variant="outlined"
          size='medium'
          onClick={sortDataByTotalSubStation}
          sx={{ border:'1px solid',fontSize:'13px', height: '37px', alignSelf: 'center', borderRadius: '20px' }}
        >
          Sort by {isSortedAsc ? 'Max' : 'Min'} Total SubStation 
        </Button>
      </div>

      <Paper sx={{ width: '100%', overflow: 'hidden', border: `1px solid ${colors.grey[900]}`, borderRadius: '20px', backgroundColor: 'transparent' }}>
        <TableContainer sx={{ maxHeight: 510 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'center'}
                    style={{ minWidth: column.minWidth, backgroundColor: colors[`${colorScheme}Accent`]?.[400] }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {/* <TableCell>View</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ backgroundColor: colors.primary['bg'] }}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align || 'center'}>
                            {column.id === 'view' ? (
                              // <Button
                              //   variant="contained"
                              //   color="primary"
                              //   onClick={() => handleViewClick(row.DIST_CODE)} // Pass the row id
                              // >
                              //   View
                              // </Button>
                              <OpenInNewIcon style={{cursor:'pointer'}} onClick={() => handleViewClick(row.DIST_CODE)}/>
                            ) : (
                              value
                            )}
                          </TableCell>
                          );
                        })}
                        {/* <TableCell><OpenInNewIcon /></TableCell> */}
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    No Data Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ backgroundColor: colors[`${colorScheme}Accent`]?.[400] }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
