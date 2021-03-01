import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Typography } from '@material-ui/core';
import adminPhoto from 'assets/admin.jpg';
import { useToasts } from 'react-toast-notifications';
const CUBE = {
  url: adminPhoto,
  title: 'Admin',
  width: '25%',
};
const USERS_PIN = '1234';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({});
  const { addToast } = useToasts();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitPin = (event) => {
    event.preventDefault();
    handleClose();
    if (values.pin === USERS_PIN) {
      history.push('/equipment/admin');
    } else {
      addToast('Pin not valet', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <ButtonBase
        onClick={handleClickOpen}
        focusRipple
        key={CUBE.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: CUBE.width,
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${CUBE.url})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {CUBE.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={submitPin}>
          <DialogTitle id="form-dialog-title">Admin Access</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the pin that you created on your profile page. If you
              haven't created it, please do so.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Enter PIN"
              type="number"
              name="pin"
              inputProps={{ maxLength: 4 }}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="secondary">
              done
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
