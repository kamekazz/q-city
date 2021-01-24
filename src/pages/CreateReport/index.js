import { Container } from '@material-ui/core';
import withAuthorization from 'components/Hooks/withAuthorization';
import MultiForm from './MultiForm';
const CreateIssuePages = () => {
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <MultiForm />
    </Container>
  );
};

export default withAuthorization(CreateIssuePages);
