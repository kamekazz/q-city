import { Container } from '@material-ui/core';
import withAuthorization from 'components/Hooks/withAuthorization';
import FormComponent from './FormComponent';
import IssueCodeTable from './IssueCodeTable';

import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
import DrawerComponents from './DrawerComponent';
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });
const CreateIssueCodePage = () => {
  // const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Container style={{ paddingTop: '1rem' }}>
      <FormComponent />
      <IssueCodeTable setOpenDrawer={setOpenDrawer} />
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        <div style={{ height: '4em' }} />
        <DrawerComponents closeDrawer={closeDrawer} />
      </Drawer>
    </Container>
  );
};

export default withAuthorization(CreateIssueCodePage);
