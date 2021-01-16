import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from 'assets/logo.svg';
import { Link, useLocation, useHistory } from 'react-router-dom';
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 275,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigateTo = (_urlRoute) => {
    history.push(_urlRoute);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="primary">
          <Toolbar disableGutters>
            <img
              alt="company logo"
              src={logo}
              className={classes.logo}
              onClick={() => handleNavigateTo('/')}
            />
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              aria-label="scrollable auto tabs example"
            >
              <ActionTab
                _to="/"
                _label="Home"
                _value={0}
                _setValue={setValue}
              />
              <ActionTab
                _to="/create_issue"
                _label="issue"
                _value={1}
                _setValue={setValue}
              />
              <ActionTab
                _to="/the_revolution"
                _label="The Revolution"
                _value={2}
                _setValue={setValue}
              />
              <ActionTab
                _to="/about_us"
                _label="About Us"
                _value={3}
                _setValue={setValue}
              />
              <ActionTab
                _to="/contact_us"
                _label="Contact Us"
                _value={4}
                _setValue={setValue}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free esteemed
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: '4em',
  },
  logo: {
    height: '4em',
    marginRight: 'auto',
    cursor: 'pointer',
  },
  // tabContainer: { marginLeft: 'auto' },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    height: '4em',
  },
  button: {
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    fontFamily: 'pacifico',
    fontSize: '1rem',
    textTransform: 'none',
    color: 'white',
    minWidth: '135px',
  },
  logoContainer: { padding: '0' },
}));

const ActionTab = (props) => {
  let { _to, _label, _setValue, _value } = props;
  const classes = useStyles();
  let urlLocation = useLocation().pathname;
  if (urlLocation === _to) {
    _setValue(_value);
  }
  return (
    <Tab component={Link} className={classes.tab} to={_to} label={_label} />
  );
};
