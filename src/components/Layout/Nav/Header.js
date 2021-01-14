import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';
import SideBarLink from './SideBarLink';
import ReportProblemTwoToneIcon from '@material-ui/icons/ReportProblemTwoTone';
const drawerWidth = 240;

function Header() {
  return (
    <AppBar>
      <Toolbar>Q-City</Toolbar>
    </AppBar>
  );
}

export default Header;
