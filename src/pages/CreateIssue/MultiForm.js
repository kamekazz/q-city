import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import ProductInfo from "./ProductInfo";

const useStyles = makeStyles({
  root: {
    margin: "1rem auto",
    padding: "6px 12px",
    "& .MuiStepIcon-active": {
      color: "blue",
    },
    "& .MuiStepIcon-completed": {
      color: "green",
    },
  },
});

const MultiForm = () => {
  const getSteps = () => {
    return ["SIGN UP", "CHOOSE PLAN", "CHECK OUT"];
  };

  const [activateStep, setStep] = useState(0);

  const getStepsContent = (_stepIndex, _handelStep) => {
    switch (_stepIndex) {
      case 0:
        return <ProductInfo handelStep={_handelStep} />;
      case 1:
        return "2 Choose plan";
      case 2:
        return "3 Check out";
      default:
        return "undone step";
    }
  };
  const handelStep = () => {
    setStep((_state) => _state + 1);
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
        ? "The Step completed"
        : getStepsContent(activateStep, handelStep)}
    </Paper>
  );
};

export default MultiForm;
