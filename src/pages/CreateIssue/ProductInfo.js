import { Typography, Button, TextField, makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { newIssueReport } from 'helpers/issueReport';
import { createReport } from 'api/report';
import { useState } from 'react';

const schema = yup.object().shape({
  ibm: yup.string().required().min(6).max(6),
  po: yup.string().required().min(4),
  vender: yup.string().required().min(2),
  location: yup.string().required().min(2),
  container: yup.string().required().min(7),
});
const useStyles = makeStyles((theme) => ({
  topContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column ',
    },
  },
  bottomContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column ',
    },
  },
  hederText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
}));
const ProductInfo = (props) => {
  const { handelStep, setMainData } = props;
  const classes = useStyles();
  const [disableButton, setDisableButton] = useState(false);
  const { addToast } = useToasts();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const report = newIssueReport(data);
    setDisableButton(true);
    createReport(report, function (res) {
      if (res.success) {
        addToast(res.message, { appearance: 'info', autoDismiss: true });
        handelStep();
        setMainData(report);
      } else {
        addToast(res.errorMessage, { appearance: 'error', autoDismiss: true });
        setDisableButton(false);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h3"
        className={classes.hederText}
        style={{ width: '100%', textAlign: 'center', marginBottom: 6 }}
      >
        Product Information
      </Typography>
      <TextContainerEL>
        <div className={classes.topContainer}>
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
        </div>
        <div className={classes.bottomContainer}>
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
        </div>
      </TextContainerEL>
      <BottomContainerEL>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={disableButton}
          style={{ marginBottom: '2rem' }}
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
  flex-direction: column;
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
