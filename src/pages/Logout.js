import React, { useEffect } from 'react';

import onlyGuest from 'components/Hooks/onlyGuest';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'Redux/reducers/auth';

const useStyles = makeStyles((theme) => ({
  mainContinuer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    height: 425,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '1rem',
  },
}));

export default function Logout() {
  const classes = useStyles();
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(logout(user.uid));
    }
  }, [isAuth, user, dispatch]);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.mainContinuer}>
        <Paper className={classes.card}>
          <Typography component="h1" variant="h2" align="center">
            Logged Out
          </Typography>
          <div>
            <Typography align="center" variant="h6">
              Thank you for using Q-city.
            </Typography>
          </div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
          >
            Sign in again
          </Button>
        </Paper>
      </div>
    </Container>
  );
}
