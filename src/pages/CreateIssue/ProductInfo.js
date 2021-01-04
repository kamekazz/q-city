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
const ProductInfo = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">Product Information</Typography>
      <TextField
        label="IBM"
        variant="outlined"
        inputRef={register}
        name="ibm"
      />
      <TextField label="PO" variant="outlined" inputRef={register} name="PO" />
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
      <Button>cancel</Button>
      <Button type="submit">save</Button>
    </form>
  );
};

export default ProductInfo;
