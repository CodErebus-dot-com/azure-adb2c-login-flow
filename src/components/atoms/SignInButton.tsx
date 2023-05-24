import { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { signInPopup, signInRedirect } from '../../authService';

export const SignInButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSignInRedirect = () => {
    setAnchorEl(null);
    signInRedirect();
  }

  const handleSignInPopup = () => {
    setAnchorEl(null);
    signInPopup();
  }

  return (
    <div>
      <Button
        onClick={event => setAnchorEl(event.currentTarget)}
        color="inherit"
      >
        Login
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem key="loginPopup" onClick={handleSignInPopup}>Sign in using Popup</MenuItem>
        <MenuItem key="loginRedirect" onClick={handleSignInRedirect}>Sign in using Redirect</MenuItem>
      </Menu>
    </div>
  )
};
