import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import { AccountPicker } from "./AccountPicker";
import { useInstance } from "../../hooks";

export const SignOutButton = () => {
  const [accountSelectorOpen, setOpen] = useState(false);
  const { instance } = useInstance();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAccountSelection = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOutRedirect = () => {
    setAnchorEl(null);
    instance?.signOutRedirect();
  };

  const handleSignOutPopup = () => {
    setAnchorEl(null);
    instance?.signOutPopup();
  };

  return (
    <div>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleAccountSelection()} key="switchAccount">
          Switch Account
        </MenuItem>
        <MenuItem key="logoutPopup" onClick={() => handleSignOutPopup()}>
          Logout using Popup
        </MenuItem>
        <MenuItem key="logoutRedirect" onClick={() => handleSignOutRedirect()}>
          Logout using Redirect
        </MenuItem>
      </Menu>
      {/* <AccountPicker open={accountSelectorOpen} onClose={handleClose} /> */}
    </div>
  );
};
