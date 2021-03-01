import { makeStyles } from '@material-ui/core';
import React from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 300px',
    gridTemplateAreas: `"Table  Form"`,
    gap: '1rem',
  },
}));
export default function Scanner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Form />
      <Table />
    </div>
  );
}
