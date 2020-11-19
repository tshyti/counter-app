import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CounterSetup from "./components/CounterSetup/CounterSetup";
import { useState } from "react";
import { useSelector } from "react-redux";
import CounterCountdown from "./components/CounterCountdown/CounterCountdown";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    marginBottom: theme.spacing(3)
  }
}));

export default function App() {
  const classes = useStyles();

  const hasCounterStarted = useSelector(
    (state) => state.counter.hasCounterStarted
  );

  function renderContent() {
    if (hasCounterStarted) {
      return <CounterCountdown />;
    }
    return <CounterSetup />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" className={classes.header}>
          Timer App
        </Typography>
        {renderContent()}
      </div>
    </Container>
  );
}
