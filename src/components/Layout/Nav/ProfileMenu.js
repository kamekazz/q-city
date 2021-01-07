import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "api";

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
    history.push("login");
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
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isAuth ? (
          <MenuItem onClick={logout}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={goToLogin}>Login</MenuItem>
        )}
      </Menu>
    </div>
  );
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps)(ProfileMenu);
