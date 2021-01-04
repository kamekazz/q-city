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
const ProductInfo = (props) => {
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
        Product Information
      </Typography>
      <TextContainerEL>
        <TextField
          label="IBM"
          variant="outlined"
          inputRef={register}
          name="ibm"
        />
        <TextField
          label="PO"
          variant="outlined"
          inputRef={register}
          name="PO"
        />
        <TextField
          label="Vender"
          variant="outlined"
          inputRef={register}
          name="vender"
        />
        <TextField
          label="Location"
          variant="outlined"
          inputRef={register}
          name="location"
        />
        <TextField
          label="Container"
          variant="outlined"
          inputRef={register}
          name="container"
        />
      </TextContainerEL>
      <BottomContainerEL>
        <Button variant="contained" style={{ marginRight: 6 }}>
          cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          save
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
