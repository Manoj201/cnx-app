import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import AppHeader from "./header/Header.component";

import PartListPage from "../modules/part/pages/PartList.page";
import NewPartPage from "../modules/part/pages/NewPart.page";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overFlowX: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw -240px)`,
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  fakeToolbar: {
    minHeight: 120,
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.content}>
        <div className={classes.fakeToolbar} />
        <Switch>
          <Route path="/app/part-list" component={PartListPage} />
          <Route path="/app/new-part" component={NewPartPage} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Layout);
