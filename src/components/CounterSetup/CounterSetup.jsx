import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CounterControl from "../CounterControl/CounterControl";
import { addSets } from "../../redux/counterSlice";

export default function CounterSetup() {
  const dispatch = useDispatch();
  const setsNumber = useSelector((state) => state.counter.setsNumber);

  return (
    <div>
      <CounterControl title="sets" onIncrease={() => dispatch(addSets())}>
        <Typography component="h6" variant="h6">
          {setsNumber}
        </Typography>
      </CounterControl>
      <CounterControl title="work">
        <Typography component="h6" variant="h6">
          2
        </Typography>
      </CounterControl>
      <CounterControl title="rest">
        <Typography component="h6" variant="h6">
          3
        </Typography>
      </CounterControl>
    </div>
  );
}
