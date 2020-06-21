import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Typography } from "../../../../shared/components";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#b4b6e0",
    padding: 20,
  },
}));

const PartItem = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6" color="primary" weight="medium">
            {props.name}
          </Typography>
          <Typography variant="body2" color="primary" weight="medium">
            {props.code}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="primary" weight="medium">
            {props.status}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default React.memo(PartItem);
