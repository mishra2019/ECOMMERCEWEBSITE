import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { navData } from "../../constant/data";
const useStyles = makeStyles(theme =>({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent:'space-between',
    overflowX:'overlay',
    [theme.breakpoints.down('md')]:{
      margin:0
    }
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <Box className={classes.container}>
          <img src={data.url} alt="" className={classes.image} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
