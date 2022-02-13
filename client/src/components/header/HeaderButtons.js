import { Badge, Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme =>({
  login: {
    background: "white",
    color: "#2874F0",
    textTransform: "unset",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
    [theme.breakpoints.down('sm')]:{
      color:'#ffffff',
      background:'#2874F0'
    }
   
  },
  container: {
    display: "flex",
    [theme.breakpoints.down('sm')]:{
      display:'block'
    }
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#ffffff",
      [theme.breakpoints.down('sm')]:{
        color:'#2874F0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:10
      },
     
    },
    [theme.breakpoints.down('sm')]:{
      display:'block'
    }
   
  
  },
  
}));

const HeaderButtons = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openLoginDialog = () => {
    setOpen(true);
  };
  const {cartItems} = useSelector(state => state.addToCart)

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile>
      ) : (
        <Link>
          <Button
            variant="contained"
            onClick={() => openLoginDialog()}
            className={classes.login}
          >
            Login
          </Button>
        </Link>
      )}
      <Typography style={{ marginTop: 5 }}>More</Typography>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="error">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <Login open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButtons;
