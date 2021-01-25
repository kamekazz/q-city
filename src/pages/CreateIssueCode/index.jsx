import { Container } from '@material-ui/core';
import withAuthorization from 'components/Hooks/withAuthorization';
import FormComponent from './FormComponent';
import IssueCodeTable from './IssueCodeTable';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const CreateIssueCodePage = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);

  const renderDrawer = () => {
    return <div style={{ width: '300px', height: '100vh' }}></div>;
  };

  return (
    <Container style={{ paddingTop: '1rem' }}>
      <FormComponent />
      <IssueCodeTable />
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        {renderDrawer()}
      </Drawer>
    </Container>
  );
};

export default withAuthorization(CreateIssueCodePage);
