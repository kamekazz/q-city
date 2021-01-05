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
  const { register, handleSubmit, errors } = useForm();

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
          inputRef={register({ required: true, minLength: 3 })}
          name="issue_code"
          helperText={
            errors.issue_code && "most de 3 digit or highjack and required"
          }
          error={errors.issue_code && true}
        />
        <TextField
          id="outlined-multiline-static"
          label="Note"
          name="note"
          multiline
          rows={4}
          inputRef={register}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Lot"
          variant="outlined"
          name="lot"
          type="number"
          inputRef={register({ required: true, min: 0 })}
          helperText={errors.lot && "required"}
          error={errors.lot && true}
        />
        <TextField
          label="Sample Size"
          type="number"
          variant="outlined"
          inputRef={register({ required: true, min: 0 })}
          name="sample_size"
          helperText={errors.sample_size && "required"}
          error={errors.sample_size && true}
        />
        <TextField
          type="number"
          label="Pass"
          variant="outlined"
          inputRef={register({ required: true, min: 0 })}
          name="pass"
          helperText={errors.pass && "required"}
          error={errors.pass && true}
        />
        <TextField
          type="number"
          label="Fail"
          variant="outlined"
          inputRef={register({ required: true, min: 0 })}
          name="fail"
          helperText={errors.fail && "required"}
          error={errors.issue_code && true}
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
