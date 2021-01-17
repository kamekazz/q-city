import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs, Toolbar, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from 'assets/logo.svg';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getQueriesForElement } from '@testing-library/react';
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
                _urlLocation={urlLocation}
                _setValue={setValue}
              />

              <MultiMenuTap
                _to="/services"
                _label="Services"
                _value={1}
                _urlLocation={urlLocation}
                _setValue={setValue}
                _listOfMenuItem={listOfMenuItem.service}
                _liveValue={value}
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

const ActionTab = (props) => {
  let { _to, _label, _setValue, _value, _urlLocation } = props;
  const classes = useStyles();
  useEffect(() => {
    if (_urlLocation === _to) {
      _setValue(_value);
    }
  }, [_setValue, _urlLocation, _to, _value]);

  return (
    <Tab
      component={Link}
      className={classes.tab}
      to={_to}
      label={_label}
      style={{ opacity: _urlLocation === _to ? '1' : '0.7' }}
    />
  );
};

const MultiMenuTap = (props) => {
  let {
    _to,
    _label,
    _setValue,
    _value,
    _urlLocation,
    _listOfMenuItem,
    _liveValue,
  } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inLink, setInLink] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToUrl = () => {
    _setValue(_value);
    handleClose();
  };

  return (
    <>
      <Tab
        component={Link}
        className={classes.tab}
        to={_to}
        label={_label}
        onMouseOver={handleClick}
        style={{ opacity: _liveValue === _value ? '1' : '0.7' }}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {_listOfMenuItem.map((_menuItem) => {
          if (_menuItem.to === _urlLocation) {
            _setValue(_value);
          }
          return (
            <MenuItem
              key={_menuItem.to}
              onClick={goToUrl}
              component={Link}
              to={_menuItem.to}
              classes={{ root: classes.menuItem }}
              style={{ opacity: _urlLocation === _menuItem.to ? '1' : '0.7' }}
            >
              {_menuItem.tabLabel}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

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
    '&:hover': {
      opacity: 1,
    },
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
  menu: {
    backgroundColor: theme.palette.primary.main,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: '0.7',
    '&:hover': {
      opacity: 1,
    },
  },
}));

const listOfMenuItem = {
  service: [
    {
      to: '/services',
      tabLabel: 'Services',
    },
    {
      to: '/service/custom_software_development',
      tabLabel: 'Custom Software development',
    },
    {
      to: '/service/mobile_app_development',
      tabLabel: 'Mobile App Development',
    },
    {
      to: '/service/website_development',
      tabLabel: 'Website Development',
    },
  ],
};
