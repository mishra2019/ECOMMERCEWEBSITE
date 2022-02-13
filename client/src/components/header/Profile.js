import { Typography, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  component: {
    marginTop: 40,
  },
  text: {
    marginLeft: 20,
    fontSize: 14,
  },
});
const Profile = ({ account, setAccount }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const logout =()=>{
      setAccount(false);
  }
  return (
    <>
      <Link>
        {" "}
        <Typography onClick={handleClick} style={{ marginTop: 4 }}>
          {account}
        </Typography>{" "}
      </Link>

      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem onClick={() =>{handleClose();logout();}}>
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.text}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
