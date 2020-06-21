import React from "react";
import Grid from "@material-ui/core/Grid";

import PartListContainer from "../containers/PartList.container";

const PartListPage = (props) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <PartListContainer />
      </Grid>
    </Grid>
  );
};

export default React.memo(PartListPage);
