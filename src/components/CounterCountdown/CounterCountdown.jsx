import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "../../hooks/useInterval";
import {
  stopCounter,
  toggleIsCounterPaused,
  updateRemainingRestSeconds,
  updateRemainingSets,
  updateRemainingWorkSecods
} from "../../redux/counterSlice";
import CounterControl from "../CounterControl/CounterControl";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(1, 0)
  },
  text: {
    textAlign: "center",
    width: "100%"
  }
}));

export default function CounterCountdown() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isCounterPaused = useSelector((state) => state.counter.isCounterPaused);
  const remainingSets = useSelector((state) => state.counter.remainingSets);
  const remainingWorkSeconds = useSelector(
    (state) => state.counter.remainingWorkSeconds
  );
  const remainingRestSeconds = useSelector(
    (state) => state.counter.remainingRestSeconds
  );

  useInterval(() => {
    updateCounter();
  }, 1000);

  function updateCounter() {
    if (isCounterPaused || remainingSets === 0) {
      return;
    }

    if (remainingWorkSeconds !== 0) {
      dispatch(updateRemainingWorkSecods());
      return;
    }
    if (remainingRestSeconds !== 0) {
      dispatch(updateRemainingRestSeconds());
      return;
    }
    dispatch(updateRemainingSets());
  }

  return (
    <Grid container>
      <Grid container item justify="center">
        <Typography component="p">Remaining:</Typography>
        <Typography component="h2" variant="h2" className={classes.text}>
          {remainingSets}
        </Typography>
      </Grid>
      <Grid container item justify="center">
        <Typography component="h2" variant="h2" className={classes.text}>
          {remainingWorkSeconds}
        </Typography>
      </Grid>
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
        onClick={() => dispatch(stopCounter())}
      >
        Stop
      </Button>
    </Grid>
  );
}
