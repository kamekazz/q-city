import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import withAuthorization from 'components/Hooks/withAuthorization';
import Landing from './Components/Landing';
import BatteryCount from './Components/BatteryCount';
import GunCount from './Components/GunCount';
import ActiveUsers from './Components/ActiveUsers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '200px auto 200px',
    gridTemplateRows: 'auto 200px',
    gridTemplateAreas: '"landing landing landing"',
    gap: '1rem',
    height: 'calc(100vh - 4em)',
    alignContent: 'center',
  },
}));

function GunTran() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Landing />
      <BatteryCount />
      <ActiveUsers />
      <GunCount />
    </Container>
  );
}

export default withAuthorization(GunTran);
