import {
  Typography,
  Button,
  Grid,
  Checkbox,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const IssueInfo = (props) => {
  const { handelStep } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handelStep();
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h5"
        style={{ width: "100%", textAlign: "center", marginBottom: 6 }}
      >
        Enter Issue
      </Typography>
      <TextContainerEL>
        <TextField
          label="Issue code"
          variant="outlined"
          inputRef={register}
          name="issue_code"
        />
        <TextField
          id="outlined-multiline-static"
          label="Note"
          name="note"
          multiline
          rows={4}
          inputRef={register}
          variant="outlined"
        />
        <TextField
          label="Lot"
          variant="outlined"
          inputRef={register}
          name="lot"
        />
        <TextField
          label="Sample Size"
          variant="outlined"
          inputRef={register}
          name="sample_size"
        />
        <TextField
          label="Pass"
          variant="outlined"
          inputRef={register}
          name="pass"
        />
        <TextField
          label="Fail"
          variant="outlined"
          inputRef={register}
          name="fail"
        />
      </TextContainerEL>
      <BottomContainerEL>
        <Button variant="contained" style={{ marginRight: 6 }}>
          cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </BottomContainerEL>
    </form>
  );
};

export default IssueInfo;
const TextContainerEL = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 6px;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }

  .MuiFormControl-root {
    margin-bottom: 6px;
  }
`;

const BottomContainerEL = styled.div`
  display: flex;
  justify-content: flex-end;
`;
