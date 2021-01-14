import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';
import SideBarLink from './SideBarLink';
import ReportProblemTwoToneIcon from '@material-ui/icons/ReportProblemTwoTone';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 275,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Q-City</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
