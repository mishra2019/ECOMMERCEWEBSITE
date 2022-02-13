import {Box, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    component:{
       margin:'80px 140px',
       width:'80%',
       background:'#ffffff',
       height:'65vh'
    },
    image:{
        width:'15%'
    },
    container:{
        textAlign:'center',
        paddingTop:70,
        '& > *':{
            marginTop:10,
            fontSize:14
        }
    },
    btn:{
        marginTop:20,
        borderRadius:2,
        padding:'12px 70px',
        fontSize:14,
        background:'#2874F0',
        color:'#ffffff'
    }
})

const EmptyCart = () => {
    const classes = useStyles();
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const history = useHistory();
    const addItem = () =>{
          history.push('/')
    }
    return ( 
        <Box className={classes.component}>
        <Box className={classes.container}>
         <img src={emptycarturl} alt="" className={classes.image} />
         <Typography>Your Cart is Empty!</Typography>
         <Typography>Add items to it now.</Typography>
        <Button className={classes.btn} variant='contained' onClick={()=>addItem()}>Shop now</Button>
        </Box>
        </Box>
     );
}
 
export default EmptyCart;