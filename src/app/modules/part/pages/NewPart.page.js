import React from "react";
import Grid from "@material-ui/core/Grid";

import AddEditPartContainer from "../containers/AddEditpart.container";

const NewPartPage = (props) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <AddEditPartContainer />
      </Grid>
    </Grid>
  );
};

export default React.memo(NewPartPage);
