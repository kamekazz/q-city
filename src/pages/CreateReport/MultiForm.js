import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FileModule from './FileModule';
import IssueInfo from './IssueInfo';
import ProductInfo from './ProductInfo';
import ReviewReport from './ReviewReport';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    padding: '6px 12px',
    '& .MuiStepIcon-active': {
      color: theme.palette.primary.dark,
    },
    '& .MuiStepIcon-completed': {
      color: theme.palette.success.main,
    },
  },
  topText: {
    fontSize: '4rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
}));

const MultiForm = () => {
  const getSteps = () => {
    return ['START', 'ADD ISSUE', 'Uploaded files', 'Finalize'];
  };

  const [activateStep, setStep] = useState(3);
  const [mainData, setMainData] = useState({});

  const resetSteps = () => {
    setStep(0);
    setMainData({});
  };

  const getStepsContent = (_stepIndex, _handelStep, _handelBack) => {
    switch (_stepIndex) {
      case 0:
        return (
          <ProductInfo handelStep={_handelStep} setMainData={setMainData} />
        );
      case 1:
        return (
          <IssueInfo
            handelBack={_handelBack}
            handelStep={_handelStep}
            setMainData={setMainData}
            mainData={mainData}
          />
        );
      case 2:
        return (
          <FileModule
            handelBack={_handelBack}
            handelStep={_handelStep}
            setMainData={setMainData}
            mainData={mainData}
          />
        );
      case 3:
        return (
          <ReviewReport
            handelBack={_handelBack}
            handelStep={_handelStep}
            setMainData={setMainData}
            mainData={mainData}
          />
        );
      default:
        return 'undone step';
    }
  };

  const renderAddNextIssue = () => {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography
          variant="h5"
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          Will you like to create another report?
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          style={{ marginBottom: '2rem' }}
        >
          <Button variant="contained" component={Link} to="/">
            no
          </Button>
          <Button variant="contained" color="primary" onClick={resetSteps}>
            yes
          </Button>
        </Grid>
      </Grid>
    );
  };

  const handelStep = () => {
    setStep((_state) => _state + 1);
  };
  const handelBack = () => {
    setStep((_state) => _state - 1);
  };
  const steps = getSteps();
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h1" gutterBottom className={classes.topText}>
          Create Issue Report
        </Typography>
        <div>
          <Stepper alternativeLabel activeStep={activateStep}>
            {steps.map((_label) => (
              <Step key={_label}>
                <StepLabel>{_label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activateStep === steps.length
            ? renderAddNextIssue()
            : getStepsContent(activateStep, handelStep, handelBack)}
        </div>
      </Grid>
    </Paper>
  );
};

export default MultiForm;
