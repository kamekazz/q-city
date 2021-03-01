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
    gridTemplateAreas: `"landing      landing     landing" 
                        "BatteryCount ActiveUsers GunCount"`,
    gap: '1rem',
    height: 'calc(100vh - 4em)',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '200px auto 200px',
      gridTemplateRows: 'auto 200px 200px',
      gridTemplateAreas: `"landing    landing      landing"
                          "GunCount   .            BatteryCount"
                          "ActiveUsers ActiveUsers ActiveUsers"
      `,
    },
    [theme.breakpoints.down('xs')]: {
      gap: 1,
      padding: 1,
    },
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
