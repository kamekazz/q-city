import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { fakeIssueCodeData } from 'api/fakeData/issueCodeData';
import { Button } from '@material-ui/core';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  rootTwo: {
    '& .MuiTableHead-root': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
      '& .MuiTableCell-head': {
        color: 'white',
        fontWeight: 900,
      },
    },
  },
  bottomContainers: {
    backgroundColor: theme.palette.grey.A100,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottomContainersLevelOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '50%',
  },
  bottomContainersLevelTwo: {
    display: 'flex',
    flexDirection: 'column',
  },
  created_by: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.issue_description}
        </TableCell>
        <TableCell align="right">{row.issue_code}</TableCell>
        <TableCell align="right" style={{ color: levelOfIssueCode(row.level) }}>
          {row.level}
        </TableCell>
        <TableCell align="right">{row.created_date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={classes.bottomContainers}>
              <div className={classes.bottomContainersLevelOne}>
                <Typography variant="h6" gutterBottom>
                  Action:
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ lineHeight: '220%', marginLeft: '1rem' }}
                >
                  {row.action_description}
                </Typography>
              </div>
              <div className={classes.bottomContainersLevelTwo}>
                <div className={classes.created_by}>
                  <Typography variant="h6" gutterBottom>
                    Created By:
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    style={{ lineHeight: '220%', marginLeft: '1rem' }}
                  >
                    {row.created_by}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<EditIcon />}
                >
                  edit
                </Button>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const classes = useRowStyles();
  return (
    <TableContainer component={Paper} className={classes.rootTwo}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Description</TableCell>
            <TableCell align="right">Issue Code</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Created Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeIssueCodeData.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const levelOfIssueCode = (_value) => {
  if (_value === 1) {
    return 'red';
  } else if (_value <= 4 && _value >= 2) {
    return 'orange';
  } else {
    return 'black';
  }
};
