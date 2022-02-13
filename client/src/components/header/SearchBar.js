import { alpha, Box, InputBase, List, ListItem, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts as listProducts } from "../../Redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    background:'#fff',
    marginLeft: 10,
    width: '38%',
    display:'flex',
  },
  searchIcon: {
    padding:5,
    color:'blue',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width:'100%',
    fontSize:'unset'
  },
  inputInput: {
    paddingLeft:20,
  },
  list:{
    position:'absolute',
    color:'#000000',
    background:'#ffffff',
    marginTop:36
  }
}))
const SearchBar = () => {
  const classes=useStyles();
  const [text,setText] = useState();
  const [open,setOpen] = useState(true);
  const getText = (text) =>{
    setText(text);
    setOpen(false);
  }
  const {products} = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(listProducts())
  },[dispatch])
  return (
    <Box className={classes.search}>
     
        <InputBase
         placeholder="Search for products,brands and more"
         classes={{
           root: classes.inputRoot,
           input: classes.inputInput,
         }}
         inputProps={{'aria-label':'search'}}
         onChange={(e) => getText(e.target.value)}
        />
         <Box className={classes.searchIcon}>
        <SearchIcon />
        </Box>
        {
          text && 
          <List className={classes.list} hidden={open}>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                  <Link 
                   to={`/product/${product.id}`}
                   style={{textDecoration:'none',color:'inherit'}}
                   onClick={() => setOpen(true)}
                   >
                 {product.title.longTitle}
                 </Link>
               </ListItem>
              ))
            }
           
          </List>
        }
    </Box>
  );
};

export default SearchBar;
