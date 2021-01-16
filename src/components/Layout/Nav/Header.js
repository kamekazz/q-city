import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs, Toolbar, Button, Menu, MenuItem } from '@material-ui/core';
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
  let urlLocation = useLocation().pathname;
  const [value, setValue] = useState(0);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigateTo = (_urlRoute) => {
    history.push(_urlRoute);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
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
                _urlLocation={urlLocation}
                _setValue={setValue}
              />
              <MultiMenuTap
                _to="/services"
                _label="Services"
                _value={1}
                _urlLocation={urlLocation}
                _setValue={setValue}
              />
              <ActionTab
                _to="/create_issue"
                _label="issue"
                _value={2}
                _urlLocation={urlLocation}
                _setValue={setValue}
              />
              <ActionTab
                _to="/about_us"
                _label="About Us"
                _value={4}
                _urlLocation={urlLocation}
                _setValue={setValue}
              />
              <ActionTab
                _to="/contact_us"
                _label="Contact Us"
                _value={5}
                _urlLocation={urlLocation}
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
  let { _to, _label, _setValue, _value, _urlLocation } = props;
  const classes = useStyles();
  useEffect(() => {
    if (_urlLocation === _to) {
      _setValue(_value);
    }
  }, [_setValue, _urlLocation]);

  return (
    <Tab component={Link} className={classes.tab} to={_to} label={_label} />
  );
};

const MultiMenuTap = (props) => {
  let { _to, _label, _setValue, _value, _urlLocation } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (_urlLocation === _to) {
      _setValue(_value);
    }
  }, [_setValue, _urlLocation]);

  return (
    <>
      <Tab
        component={Link}
        className={classes.tab}
        to={_to}
        label={_label}
        onMouseOver={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
