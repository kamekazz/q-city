import { Typography, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  issue_code: yup.string().required().min(3),
  lot: yup.number().required().min(1),
  sample_size: yup.number().required().min(1),
  pass: yup.number().required().min(0),
  failed: yup.number().required().min(0),
});

const IssueInfo = (props) => {
  const { handelStep } = props;
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

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
          name="issue_code"
          inputRef={register}
          helperText={errors?.issue_code?.message}
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
          inputRef={register}
          helperText={errors?.lot?.message}
          error={errors.lot && true}
        />
        <TextField
          label="Sample Size"
          type="number"
          variant="outlined"
          inputRef={register}
          name="sample_size"
          helperText={errors?.sample_size?.message}
          error={errors.sample_size && true}
        />
        <TextField
          type="number"
          label="Pass"
          variant="outlined"
          inputRef={register}
          name="pass"
          helperText={errors?.pass?.message}
          error={errors.pass && true}
        />
        <TextField
          type="number"
          label="Failed"
          variant="outlined"
          inputRef={register}
          name="failed"
          helperText={errors?.pass?.message}
          error={errors.pass && true}
        />
      </TextContainerEL>
      <BottomContainerEL>
        <Button
          variant="contained"
          style={{ marginRight: 6 }}
          onClick={props.handelBack}
        >
          Back
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
