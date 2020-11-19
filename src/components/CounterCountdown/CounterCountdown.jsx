import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "../../hooks/useInterval";
import {
  startCounter,
  stopCounter,
  toggleIsCounterPaused,
  updateRemainingRestSeconds,
  updateRemainingSets,
  updateRemainingWorkSecods
} from "../../redux/counterSlice";

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

  const shouldRunInterval = !(isCounterPaused || remainingSets === 0);

  useInterval(
    () => {
      updateCounter();
    },
    shouldRunInterval ? 1000 : null
  );

  function updateCounter() {
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

  function renderRemainingSeconds() {
    if (remainingWorkSeconds !== 0) {
      return (
        <>
          <Typography component="p">Work remaining:</Typography>
          <Typography component="h2" variant="h2" className={classes.text}>
            {remainingWorkSeconds}s
          </Typography>
        </>
      );
    }
    return (
      <>
        <Typography component="p">Rest remaining:</Typography>
        <Typography component="h2" variant="h2" className={classes.text}>
          {remainingRestSeconds}s{" "}
        </Typography>
      </>
    );
  }

  if (remainingSets === 0) {
    return (
      <Grid container>
        <Grid container item justify="center">
          <Typography component="p">
            Good job, you completed the work
          </Typography>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => dispatch(stopCounter())}
        >
          Go Back
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => dispatch(startCounter())}
        >
          Start again
        </Button>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid container item justify="center">
        <Typography component="p">Remaining Sets:</Typography>
        <Typography component="h2" variant="h2" className={classes.text}>
          {remainingSets}
        </Typography>
      </Grid>
      <Grid container item justify="center">
        {renderRemainingSeconds()}
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
