import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tokens } from '../theme';
import { Box, Card, CardContent, colors } from '@mui/material';

// Define the StyledTableCell and StyledTableRow components with theme-based styling
const StyledTableCell = styled(TableCell)(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: colors.primary["card"],
      color: colors.grey[500],
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  };
});

const StyledTableRow = styled(TableRow)(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    '&:nth-of-type(odd)': {
      backgroundColor: colors.primary["bg"],
    },
    '&:nth-of-type(even)': {
      backgroundColor: colors.primary["bg"],
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  };
});

// Status component
const Status = ({ title, bgCOlor, color }) => {
  return (
    <div style={{backgroundColor:bgCOlor, color:color, fontWeight:"600",  padding: '4px 8px', borderRadius: '5px', width:"fit-content" }}>
      {title}
    </div>
  );
};

// Create data function
function createData(name, calories, fat, status) {
  return { name, calories, fat, status };
}

// Define rows

// Main component
export default function CustomizedTables() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const rows = [
        createData('INV-1990', 'Android', '$83.60', <Status title="Paid" color={theme.palette.mode === 'dark' ? colors.greenAccent[500] : colors.greenAccent["light"]}  bgCOlor={theme.palette.mode === 'dark' ? colors.greenAccent["light"] : colors.greenAccent[500]} />),
        createData('INV-1991', 'Mac', '$97.52', <Status title="Out of date"  color={theme.palette.mode === 'dark' ? colors.redAccent[500] : colors.redAccent[100]} bgCOlor={theme.palette.mode === 'dark' ? colors.redAccent["light"] : colors.redAccent[500]} />),
        createData('INV-1992', 'Windows', '$45.60', <Status title="Progress"  color={theme.palette.mode === 'dark' ? colors.yellowAccent[500] : colors.yellowAccent["light"]} bgCOlor={theme.palette.mode === 'dark' ? colors.yellowAccent["light"] : colors.yellowAccent[500]} />),
        createData('INV-1993', 'Android', '$55.20', <Status title="Paid"  color={theme.palette.mode === 'dark' ? colors.greenAccent[500] : colors.greenAccent["light"]}  bgCOlor={theme.palette.mode === 'dark' ? colors.greenAccent["light"]: colors.greenAccent[500]} />),
        createData('INV-1994', 'Mac', '$99.35', <Status title="Paid"  color={theme.palette.mode === 'dark' ? colors.greenAccent[500] : colors.greenAccent["light"]}  bgCOlor={theme.palette.mode === 'dark' ? colors.greenAccent["light"] : colors.greenAccent[500]} />),
      ];
      
  return (
    <Card sx={{ padding: "0", borderRadius: "20px", backgroundColor: `${colors.primary["bg"]}` }}>
      <CardContent className='cardContent' sx={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", padding:"8px !important" }}>
        <Box width="100%" display="flex" flexDirection="column" gap="0px" padding="0">
          <h2 style={{marginLeft:"20px"}}>New Invoice</h2>
    <TableContainer style={{borderRadius:"12px", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}} component={Paper}>
      <Table sx={{ minWidth: 700}}  aria-label="customized table">
        <TableHead>
          <TableRow style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
            <StyledTableCell>Invoice ID</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell sx={{textAlign:"-webkit-right"}} align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </CardContent>
    </Card>
  );
}
