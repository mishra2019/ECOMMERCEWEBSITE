import { CallMissedSharp } from '@material-ui/icons';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constant/data';
const useStyles=makeStyles(theme =>({
    image:{
        width:'100%',
        height:280,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180
        },
    },
    carousel:{
        marginTop:10
    }
}))
const Banner = () => {
    const classes=useStyles();
    return ( 
        <Carousel 
         autoPlay={true}
         animation='slide'
         indicators={false}
         navButtonsAlwaysVisible={true}
         cycleNavigation={true}
         navButtonsProps={{
             style:{
                 background:'#FFFFFF',
                 color:'#494949',
                 borderRadius:0,
                 margin:0,
                 height:70
             }
         }}
         className={classes.carousel}
         >  
            {
                bannerData.map(image =>(
                    <img src={image} alt='banner' className={classes.image}/>

                ))
            }
        </Carousel>
     );
}
 
export default Banner;