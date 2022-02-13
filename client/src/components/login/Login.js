import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { authenticationSignup,authenticateLogin } from "../../service/api";
const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874F0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "white",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB6410",
    color: "white",
    height: 48,
    padding: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  otpBtn: {
    textTransform: "none",
    background: "#ffffff",
    color: "#2874F0",
    height: 48,
    padding: 2,
  },
  newUser: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 14,
    color: "#2874F0",
    fontWeight: 600,
    cursor: "pointer",
  },
  error:{
    fontSize:10,
    color:'#FF6161',
    marginTop:10,
    fontWeight:600,
    lineHeight:0
  }
});
const initialValues={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
       
    },
    singup:{
        view:'signup',
        heading:`Looks like you're new here!`,
        subHeading:'Sign up with your mobile number to get started'
    }
}
const signupInitialValues ={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}
const loginInitialValues ={
  username:'',
  password:''
}
const Login = ({ open, setOpen,setAccount}) => {
  const classes = useStyles();

  const [account, setToggleAccount] = useState(initialValues.login);
  
  const [signup,setSignup]=useState(signupInitialValues);
  const [login,setLogin]=useState(loginInitialValues);

  const [error,setError] = useState(false);
  const toggleUserAccount = () =>{
    setToggleAccount(initialValues.singup)
  }
  const handleClose = () => {
    setOpen(false);
    setToggleAccount(initialValues.login)
   

  };
  const signupUser= async ()=>{
   let response= await authenticationSignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.username);
  }
  const onInputChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }
  const onValueChange =(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const loginUser = async()=>{
    let response=await authenticateLogin(login);
    if(!response){
      setError(true);
      return;
    }
    handleClose();
    setAccount(login.username);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ paddingTop: 20 }}>
                {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField name="username" onChange={(e)=>onValueChange(e)} label="Enter Email or Mobile Number" />
              <TextField name="password" onChange={(e)=>onValueChange(e)} label="Enter your Password" />
               {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button variant="contained" 
               onClick={()=>loginUser()}
              className={classes.loginBtn}>
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.otpBtn}>
                Request OTP
              </Button>
              <Typography 
              onClick={()=> toggleUserAccount()}
              className={classes.newUser}>
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField onChange={(e)=>onInputChange(e)} name="firstname" label="Enter First Name" />
              <TextField onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Last Name" />
              <TextField onChange={(e)=>onInputChange(e)} name="username" label="Enter UserName"/>
              <TextField onChange={(e)=>onInputChange(e)} name="email" label="Enter your Email" />
              <TextField onChange={(e)=>onInputChange(e)} name="password" label="Enter Your Password" />
              <TextField onChange={(e)=>onInputChange(e)} name="phone" label="Enter your Phone Number" />
              <Button    
                variant="contained" 
                className={classes.loginBtn}
                onClick={()=>signupUser()}
                >
                Signup
              </Button>
             
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
