import { Box, Button, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import GroupButtons from "./GroupButtons";
const useStyles = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop: "1px solid #f0f0f0",
  },
  leftComponent: {
    margin: 20,
    display:'flex',
    flexDirection:'column'
  },
  rightComponent: {
    margin: 20,
  },
  smallText: {
    fontSize: 14,
  },
  grayTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    height: 110,
    width: 110,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});

const CartItem = ({ item, removeItemFromCart }) => {
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} alt="" className={classes.image} />
        <GroupButtons />
      </Box>
      <Box className={classes.rightComponent}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          className={clsx(classes.smallText, classes.grayTextColor)}
          style={{ marginTop: 10 }}
        >
          Seller:SuperComet
          <span>
            <img src={fassured} alt="" style={{ width: 50, marginLeft: 10 }} />
          </span>
        </Typography>
        <Typography style={{ padding: "20px 0" }}>
          <span className={classes.price}>₹{item.price.cost}</span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span className={classes.grayTextColor}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} OFF</span>
        </Typography>
        <Button
          className={classes.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          REMOVe
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
