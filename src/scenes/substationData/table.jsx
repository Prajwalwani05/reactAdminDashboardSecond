import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material';
import { colorModeContext, tokens } from '../../theme';

const columns = [
  { id: 'DIST_CODE', label: 'District Code', minWidth: 100 },
  { id: 'DIST_NAME', label: 'District Name', minWidth: 170 },
  { id: 'TotalSubStation', label: 'Total SubStation', minWidth: 100 },
  { id: 'TotalSolarCapacity', label: 'Total Solar Capacity', minWidth: 100 },
  { id: 'TotalLandRequired', label: 'Total Land Required', minWidth: 100 },
  { id: 'JM_LAND_AREA', label: 'JM LAND AREA', minWidth: 100 },
  { id: 'TotalSubStation', label: 'Total Substations', minWidth: 170 },
];

export default function StickyHeadTable({ data = [] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorScheme } = React.useContext(colorModeContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' , border:`1px solid ${colors.grey[900]}`, borderRadius:'20px', backgroundColor:'transparent' }}>
      <TableContainer sx={{ maxHeight: 510 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'center'}
                  style={{ minWidth: column.minWidth , backgroundColor: colors[`${colorScheme}Accent`]?.[400]}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ backgroundColor: colors.primary['bg']}}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align || 'center'}>
                            {value}
                          </TableCell>
                        );
                      })}
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
      style={{backgroundColor: colors[`${colorScheme}Accent`]?.[400]}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
