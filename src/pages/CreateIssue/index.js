import withAuthorization from "components/Hooks/withAuthorization";
import MultiForm from "./MultiForm";
const CreateIssuePages = () => {
  return (
    <div>
      <MultiForm />
    </div>
  );
};

export default withAuthorization(CreateIssuePages);
