/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link, Redirect } from 'react-router-dom';
import onlyGuest from 'components/Hooks/onlyGuest';
import { login } from 'Redux/actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '3rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0rem',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { addToast } = useToasts();

  const onLogin = (loginData) => {
    console.log('start');
    login(loginData).then(
      (_) => setRedirect(true),
      (errorMessage) =>
        addToast(errorMessage, {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
    );
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onLogin)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register}
            helperText={errors?.email?.message}
            error={errors.email && true}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register}
            helperText={errors?.password?.message}
            error={errors.password && true}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default onlyGuest(Login);
