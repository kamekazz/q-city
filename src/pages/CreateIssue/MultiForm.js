import { Stepper, Step, StepLabel, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import FileModule from './addfile/FileModule';
import IssueInfo from './IssueInfo';
import ProductInfo from './ProductInfo';
import ReviewReport from './ReviewReport';

const useStyles = makeStyles({
  root: {
    margin: '1rem auto',
    padding: '6px 12px',
    '& .MuiStepIcon-active': {
      color: 'blue',
    },
    '& .MuiStepIcon-completed': {
      color: 'green',
    },
  },
});

const MultiForm = () => {
  const getSteps = () => {
    return ['START', 'ADD ISSUE', 'Uploaded files', 'Finalize'];
  };

  const [activateStep, setStep] = useState(2);
  const [mainData, setMainData] = useState({});
  console.log('main data', mainData);
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
      <Stepper alternativeLabel activeStep={activateStep}>
        {steps.map((_label) => (
          <Step key={_label}>
            <StepLabel>{_label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activateStep === steps.length
        ? 'The Step completed'
        : getStepsContent(activateStep, handelStep, handelBack)}
    </Paper>
  );
};

export default MultiForm;
