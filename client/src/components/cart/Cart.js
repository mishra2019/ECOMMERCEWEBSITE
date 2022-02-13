import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromcart } from "../../Redux/actions/CartActions";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/Paytm";
const useStyles = makeStyles(theme =>({
    component:{
        // marginTop:55,
        padding:'30px 130px',
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            padding:'15px 0'
        }
    },
    leftComponent:{
        // width:'67%'
        [theme.breakpoints.down('sm')]:{
            paddingBottom:15
        }

    },
    header:{
        padding:'15px 24px',
        background:'#ffffff'
    },
    placeOrder:{
        background:'#fb641b',
        color:'#ffffff',
        width:250,
        height:50,
        borderRadius:2,
        display:'flex',
        marginLeft:'auto'
    },
    bottom:{
        padding:'16px 22px',
        background:'#ffffff',
        borderTop:'1px solid #F0F0F0',
        boxShadow:'0 -2px 10px 0 rgb(0 0 0 /10%)'
    }
}));

const Cart = () => {
    
    const classes = useStyles();

    const dispatch = useDispatch();

    const  {cartItems } = useSelector(state => state.addToCart);
    useEffect(() => {
        console.log(cartItems);
    });
    const removeItemFromCart = (id) =>{
        dispatch(removeFromcart(id))
    }
    const buyNow = async() =>{
        let response =await payUsingPaytm({amount:600,email:'mroshanmishra0072@gmail.com'});

       let information = {
           action:'https://securegw-stage.paytm.in/order/process',
           params:response
       }

        post(information)
    }
    return ( 
        <>
        {
            cartItems.length?
            <Grid container className={classes.component}>
                <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                  <Box className={classes.header}>
                      <Typography style={{fontWeight:600, fontSize:18}}>My Cart ({cartItems.length})</Typography>
                  </Box>
                  {
                      cartItems.map( item => (
                        <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                      ))
                  }
                  <Box className={classes.bottom}>
                      <Button variant="contained" className={classes.placeOrder} onClick={() => buyNow()}>Place Order</Button>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
               <TotalView cartItems={cartItems}/>
               </Grid>
            
            </Grid>:
             <EmptyCart/>
        }
        </>
     );
}
 
export default Cart;