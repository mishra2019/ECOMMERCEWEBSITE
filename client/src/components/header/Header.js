import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import SearchBar from "./SearchBar";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
const useStyle = makeStyles( theme =>({
  header: {
    background: "#2874F0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 4,
    height:10
  },
  container:{
      display:'flex'
  },
  component:{
    marginLeft:'12%',
    lineHeight:0,
    textDecorationWidth:'none',
    color:'#ffffff'
  },
  subheading:{
      fontSize:10,
      fontStyle:'Italic'
  },
  list:{
    width:250
  },
  menuButton:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
      display:'block'
    }
  },
  customButton:{
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }

}));
const ToolBar = withStyles({
  root:{
    minHeight:55
  }
})(Toolbar)
const Navbar = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const [open,setOpen] = useState(false);
  const handleClose =() =>{
    setOpen(false);
  }
  const handleOpen = () =>{
    setOpen(true);
  }
  const list = () =>(
    <Box className={classes.list} onClick={handleClose}>
      <List>
        <ListItem button> 
          <HeaderButtons/>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton
          color='inherit'
          className={classes.menuButton}
          onClick = {handleOpen}
        >
           <MenuIcon/>
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
           {list()}
        </Drawer>
        <Link to='/' className={classes.component}>
        <img src={logoURL} alt="" className={classes.logo} />
        <Box className={classes.container}> 
          <Typography className={classes.subheading}>
            Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
          <img src={subURL} alt="" className={classes.subURL} />
        </Box>
        </Link>
        <SearchBar/>
      <span className={classes.customButton}>  <HeaderButtons/></span>
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;
