import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { Typography } from "../../shared/components";

import logo from "../../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    backgroundImage:
      "linear-gradient(0deg, rgba(46,51,83,1) 24%, rgba(0,0,0,1) 86%)",
    padding: 20,
  },
  appTitle: {
    paddingLeft: 20,
    paddingTop: 5,
  },
}));

const AppHeader = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <img src={logo} alt="logo" height="75" weight="150" />
            </Grid>
            <Grid item className={classes.appTitle}>
              <Typography variant="h4" color="secondary" weight="bold">
                CNX APP
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default React.memo(AppHeader);
