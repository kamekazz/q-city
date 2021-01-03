import onlyGuest from "components/hoc/onlyGuest";
import MultiForm from "./MultiForm";
const CreateIssuePages = () => {
  return (
    <div>
      <MultiForm />
    </div>
  );
};

export default onlyGuest(CreateIssuePages);
