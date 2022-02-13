import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ImageURL } from "../../constant/data";
const useStyles = makeStyles(theme =>({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
  help:{
   [theme.breakpoints.down('md')]:{
     objectFit:'cover',
     height:120
   }
  }
}));
const MidSection = () => {
  const classes = useStyles();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <Grid container lg={12} md={12} sm={12} xs={12} className={classes.wrapper}>
        {ImageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
          <img src={image} alt="" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
        <img src={coronaURL} alt="" style={{ width: "100%", marginTop: 20 }} className={classes.help} />
      
    </>
  );
};

export default MidSection;
