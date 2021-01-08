import { Typography, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { newIssueReport } from "helpers/issueReport";
import { createReport } from "api/report";
import { useState } from "react";

const schema = yup.object().shape({
  ibm: yup.string().required().min(6).max(6),
  po: yup.string().required().min(4),
  vender: yup.string().required().min(2),
  location: yup.string().required().min(2),
  container: yup.string().required().min(7),
});

const ProductInfo = (props) => {
  const { handelStep, setMainData } = props;
  const [disableButton, setDisableButton] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const report = newIssueReport(data);
    setDisableButton(true);
    createReport(report, handelStep, setMainData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h5"
        style={{ width: "100%", textAlign: "center", marginBottom: 6 }}
      >
        Product Information
      </Typography>
      <TextContainerEL>
        <TextField
          label="IBM"
          variant="outlined"
          name="ibm"
          type="number"
          inputRef={register}
          helperText={errors?.ibm?.message}
          error={errors.ibm && true}
        />
        <TextField
          label="PO"
          variant="outlined"
          inputRef={register}
          name="po"
          helperText={errors?.po?.message}
          error={errors.po && true}
        />
        <TextField
          label="Vender"
          variant="outlined"
          inputRef={register}
          name="vender"
          helperText={errors?.vender?.message}
          error={errors.vender && true}
        />
        <TextField
          label="Location"
          variant="outlined"
          inputRef={register}
          name="location"
          defaultValue="nj"
          helperText={errors?.location?.message}
          error={errors.location && true}
        />
        <TextField
          label="Container"
          variant="outlined"
          inputRef={register}
          name="container"
          helperText={errors?.container?.message}
          error={errors.container && true}
        />
      </TextContainerEL>
      <BottomContainerEL>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={disableButton}
        >
          Next
        </Button>
      </BottomContainerEL>
    </form>
  );
};

export default ProductInfo;
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
