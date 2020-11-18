import { Grid, IconButton, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export default function CounterControl({
  title,
  children,
  onIncrease,
  onDecrease,
  style = {}
}) {
  return (
    <Grid container spacing={0} style={{ marginBottom: "10px" }}>
      <Grid item xs={12}>
        <Typography
          style={{ textAlign: "center", textTransform: "capitalize" }}
          component="h6"
          variant="h6"
        >
          {title}
        </Typography>
      </Grid>
      <Grid container item xs={4} justify="center">
        <IconButton
          color="primary"
          aria-label="decrease counter"
          component="span"
          onClick={onDecrease}
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid container item xs={4} alignItems="center" justify="center">
        {children}
      </Grid>
      <Grid container item xs={4} justify="center">
        <IconButton
          color="primary"
          aria-label="increase counter"
          component="span"
          onClick={onIncrease}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
