import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { theme } from 'styles/muiTheme';
import { getInitialsName } from 'helpers/letter';

function ProfileMenu() {
  const { user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const goToLogout = () => {
    handleClose();
    history.push('logout');
  };

  const goToProfile = () => {
    handleClose();
    history.push('/profile');
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        style={{
          backgroundColor: theme.palette.secondary.main,
          height: 52,
          width: 52,

          marginRight: '1rem',
        }}
      >
        {getInitialsName(user.fullName)}
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 1302 }}
      >
        <MenuItem onClick={goToProfile}>Profile</MenuItem>
        <MenuItem onClick={goToLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps)(ProfileMenu);
