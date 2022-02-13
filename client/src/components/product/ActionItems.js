import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from 'clsx';
import {GamepadOutlined, ShoppingCart as Cart} from '@material-ui/icons';
import {FlashOn as Flash} from '@material-ui/icons';
import {useDispatch} from 'react-redux'
import { addToCart } from "../../Redux/actions/CartActions";
import {useHistory} from 'react-router-dom'
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/Paytm";

const useStyles = makeStyles(theme=>({
    leftConatiner:{
        padding:'40px 0 0 80px',
        [theme.breakpoints.down('md')]:{
            padding:'20px 40px'
        }
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0',
        width:'95%'
    },
    btn:{
        height:50,
        width:'46%',
        borderRadius:2
    },
    addTocart:{
        background:'#FF9F00',
        color:'white',
        marginRight:10
    },
    buyNow:{
        background:'#FB641B',
        color:'white'
    }
}));

const ActionItems = ({product}) => {
    const classes = useStyles();
    
   const history = useHistory();

    const dispatch = useDispatch();

    const addItemToCart = () =>{
        dispatch(addToCart(product.id));
        history.push('/cart')
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
        <Box className={classes.leftConatiner}>
            <img src={product.detailUrl} alt="" className={classes.image}/> <br></br>
            <Button variant="contained" onClick={ () => addItemToCart() } className={clsx(classes.btn,classes.addTocart)}><Cart/>Add To Cart</Button>
            <Button variant="contained" className={clsx(classes.btn,classes.buyNow)} onClick={() => buyNow()}><Flash/>Buy now</Button>
        </Box>
     );
}
 
export default ActionItems;