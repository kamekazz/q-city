import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function ProfileMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const { isAuth } = props;
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const goToLogin = () => {
    handleClose();
    history.push('login');
  };

  const goToLogout = () => {
    handleClose();
    history.push('logout');
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        size="medium"
      >
        <AccountCircle color={isAuth ? 'secondary' : ''} fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 1302 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {isAuth ? (
          <>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={goToLogout}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem onClick={goToLogin}>Login</MenuItem>
        )}
      </Menu>
    </div>
  );
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps)(ProfileMenu);
