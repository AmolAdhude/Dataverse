import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../views/Title';
import './User.css'
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(1, '12 Oct, 2022', 'Elvis Presley', 1026, 'VISA ⠀•••• 3719', 312.44),
  createData(2, '12 Oct, 2022', 'Paul McCartney', 1024, 'VISA ⠀•••• 2574', 866.99),
  createData(3, '12 Oct, 2022', 'Tom Scholz', 1020, 'MC ⠀•••• 1253', 100.81),
  createData(4, '12 Oct, 2022', 'Michael Jackson', 1018, 'AMEX ⠀•••• 2000', 654.39),
  createData(5, '12 Oct, 2022', 'Bruce Springsteen', 1009, 'VISA ⠀•••• 5919', 212.79),
  createData(6, '12 Oct, 2022', 'Tom Scott', 998, 'MC ⠀•••• 1253', 100.81),
  createData(7, '12 Oct, 2022', 'Ruby Jackson', 996, 'AMEX ⠀•••• 2000', 654.39),
  createData(8, '12 Oct, 2022', 'Bruce wayne', 994, 'VISA ⠀•••• 5919', 212.79),
  createData(9, '12 Oct, 2022', 'Sherlock Smith', 989, 'AMEX ⠀•••• 2000', 654.39),
  createData(10, '12 Oct, 2022', 'Jhon Watson', 976, 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TopUsers() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Top 10 Ranks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="chartbg title">Rank</TableCell>
            <TableCell className="chartbg title">Name</TableCell>
            <TableCell className="chartbg title">Total Points</TableCell>
            {/* <TableCell>Payment Method</TableCell>
            <TableCell align="right">Revenue</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="chartbg">{row.id}</TableCell>
              <TableCell className="chartbg">{row.name}</TableCell>
              <TableCell className="chartbg">{row.shipTo}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more 
        </Link>
      </div>
    </React.Fragment>
  );
}