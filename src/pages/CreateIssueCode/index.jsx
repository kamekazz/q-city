import { Container } from '@material-ui/core';
import withAuthorization from 'components/Hooks/withAuthorization';
import FormComponent from './FormComponent';
import IssueCodeTable from './IssueCodeTable';
const CreateIssueCodePage = () => {
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <FormComponent />
      <IssueCodeTable />
    </Container>
  );
};

export default withAuthorization(CreateIssueCodePage);
