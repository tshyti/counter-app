import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CounterSetup from "./components/CounterSetup/CounterSetup";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    marginBottom: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function App() {
  const classes = useStyles();

  const [hasTimerStarted, setHasTimerStarted] = useState(false);

  function handleTimerStart() {
    setHasTimerStarted(true);
  }

  function renderContent() {
    if (hasTimerStarted) {
      return null;
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleTimerStart}
        >
          Start
        </Button>
      </div>
    </Container>
  );
}
