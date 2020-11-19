import { Button, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasCounterStarted,
  toggleIsCounterPaused
} from "../../redux/counterSlice";
import CounterControl from "../CounterControl/CounterControl";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(1, 0)
  }
}));

export default function CounterCountdown() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isCounterPaused = useSelector((state) => state.counter.isCounterPaused);

  return (
    <Grid container>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => dispatch(toggleIsCounterPaused())}
      >
        {isCounterPaused ? "Resume" : "Pause"}
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => dispatch(setHasCounterStarted(false))}
      >
        Stop
      </Button>
    </Grid>
  );
}
