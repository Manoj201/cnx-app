import React from "react";
import { Field } from "formik";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Typography } from "app/shared/components";

const FormField = (props) => {
  return (
    <Grid item>
      <Typography variant="h6" weight="medium" color="primary">
        {props.label}
      </Typography>
      <Paper style={{ padding: 20, backgroundColor: "#b4b6e0" }}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Field {...props.fieldProps} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default React.memo(FormField);
