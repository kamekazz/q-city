import React from 'react';
import { Container } from '@material-ui/core';
import withAuthorization from 'components/Hooks/withAuthorization';
import Landing from './Components/Landing';
import BatteryCount from './Components/BatteryCount';
import GunCount from './Components/GunCount';
import ActiveUsers from './Components/ActiveUsers';

function index() {
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <Landing />
      <BatteryCount />
      <GunCount />
      <ActiveUsers />
    </Container>
  );
}

export default withAuthorization(index);
