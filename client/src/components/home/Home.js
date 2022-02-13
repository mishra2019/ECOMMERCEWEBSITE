import { Box, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import MidSection from "./MidSection";
import Navbar from "./Navbar";
import Slide from "./Slide";
// import { products } from "../../constant/data";
import { getProducts as listProducts } from "../../Redux/actions/productActions";

const useStyles = makeStyles(theme =>({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  leftWrapper:{
    width:'83%',
    [theme.breakpoints.down('md')]:{
      width:'100%'
    }
  },
  rightWrapper:{
      background:'white',
      padding:5,
      margin:'12px 0 0 10px',
      width:'17%',
      [theme.breakpoints.down('md')]:{
        display:'none'
      }

  }
}));

const Home = () => {
  const classes = useStyles();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
 
   const {products} = useSelector(state => state.getProducts);
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(listProducts())
   },[dispatch])
 
    return (
    <Box>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{display:'flex'}}>
          <Box className={classes.leftWrapper}>
            <Slide 
              timer={true}
              title="Deal of the Day"
              products={products}
            />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="" style={{width:230}}/>
          </Box>
        </Box>
        <MidSection/>
        <Slide
          timer={false}
          title="Discount For You"
          products={products}
        />
         <Slide
          timer={false}
          title="Suggested Items"
          products={products}
        />
         <Slide
          timer={false}
          title="Top Selection"
          products={products}
        />
         <Slide
          timer={false}
          title="Recomended Items"
          products={products}
        />
         <Slide
          timer={false}
          title="Best Sellers"
          products={products}
        />
      </Box>
    </Box>
  );
};

export default Home;
