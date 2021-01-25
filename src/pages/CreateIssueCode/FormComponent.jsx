import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    padding: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {},
  contain: { display: 'flex', flexDirection: 'column' },
  levelOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > *': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },
  levelTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > *': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    alignItems: 'flex-end',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const levelArray = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  },
];

const FormComponent = () => {
  const classes = useStyles();
  const [level, setLevel] = useState(1);

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h2" gutterBottom>
          Create Issues Code
        </Typography>
      </div>
      <div className={classes.contain}>
        <div className={classes.levelOne}>
          <TextField label="Issue Code" style={{ maxWidth: '90px' }} />
          <TextField label="Description" multiline rowsMax={2} fullWidth />
          <TextField
            select
            label="Select"
            value={level}
            onChange={handleChange}
            helperText="level"
            style={{ maxWidth: '70px' }}
          >
            {levelArray.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.levelTwo}>
          <TextField label="Action" multiline rowsMax={4} fullWidth />
          <div className={classes.buttonsContainer}>
            <Button
              style={{ marginRight: '1rem' }}
              size="small"
              // onClick={onsubmitSave}
            >
              cancel
            </Button>
            <Button
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
              // onClick={onsubmitSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default FormComponent;
