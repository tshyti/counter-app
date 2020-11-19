import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CounterControl from "../CounterControl/CounterControl";
import {
  addRestSeconds,
  addSets,
  addWorkSeconds,
  removeRestSeconds,
  removeSets,
  removeWorkSeconds,
  setHasCounterStarted
} from "../../redux/counterSlice";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function CounterSetup() {
  const setsNumber = useSelector((state) => state.counter.setsNumber);
  const workSeconds = useSelector((state) => state.counter.workSeconds);
  const restSeconds = useSelector((state) => state.counter.restSeconds);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container>
      <CounterControl
        title="sets"
        onIncrease={() => dispatch(addSets())}
        onDecrease={() => dispatch(removeSets())}
      >
        <Typography component="h6" variant="h6">
          {setsNumber}
        </Typography>
      </CounterControl>
      <CounterControl
        title="work"
        onIncrease={() => dispatch(addWorkSeconds())}
        onDecrease={() => dispatch(removeWorkSeconds())}
      >
        <Typography component="h6" variant="h6">
          {workSeconds}
        </Typography>
      </CounterControl>
      <CounterControl
        title="rest"
        onIncrease={() => dispatch(addRestSeconds())}
        onDecrease={() => dispatch(removeRestSeconds())}
      >
        <Typography component="h6" variant="h6">
          {restSeconds}
        </Typography>
      </CounterControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => dispatch(setHasCounterStarted(true))}
      >
        Start
      </Button>
    </Grid>
  );
}
