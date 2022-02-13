import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    componennt:{
        marginTop:30,
    },
    btn:{
        borderRadius:'50%'
    }
})

const GroupButtons = () => {
    const classes = useStyles();
    const [counter, setCounter] = useState(1);
    const onHandleDecrement = () =>{
        setCounter(counter => counter-1);
    }
    const onHandleIncrement = () =>{
        setCounter(counter => counter+1);
    }

  return (
    <ButtonGroup className={classes.componennt}>
      <Button className={classes.btn} onClick={() => onHandleDecrement()} disabled={counter==1}>-</Button>
      <Button>{counter}</Button>
      <Button className={classes.btn} onClick={() => onHandleIncrement()}>+</Button>
    </ButtonGroup>
  );
};

export default GroupButtons;
