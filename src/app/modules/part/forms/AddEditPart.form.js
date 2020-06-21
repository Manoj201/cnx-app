import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ClearIcon from "@material-ui/icons/Clear";

import {
  FormTextField,
  FormSelectField,
  Typography,
  ActionButton,
} from "app/shared/components";

const AddEditPartForm = (props) => {
  return (
    <Formik
      initialValues={{
        name: "",
        code: "",
        status: "",
      }}
      onSubmit={(aa) => {
        alert(aa);
      }}
      enableReinitialize
    >
      {(formikProps) => {
        const { initialValues, values } = formikProps;
        return (
          <Form>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Typography variant="h6" weight="medium" color="primary">
                  Part Name
                </Typography>
                <Paper style={{ padding: 20, backgroundColor: "#b4b6e0" }}>
                  <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Field
                        name="name"
                        component={FormTextField}
                        placeholder="Enter Part Name"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Typography variant="h6" weight="medium" color="primary">
                  Part Code
                </Typography>
                <Paper style={{ padding: 20, backgroundColor: "#b4b6e0" }}>
                  <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Field
                        name="code"
                        component={FormTextField}
                        placeholder="Enter Part Code"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Typography variant="h6" weight="medium" color="primary">
                  Part Status
                </Typography>
                <Paper style={{ padding: 20, backgroundColor: "#b4b6e0" }}>
                  <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Field
                        name="status"
                        component={FormSelectField}
                        data={[
                          {
                            label: "Checked In",
                            value: "Checked In",
                          },
                          {
                            label: "Checked Out",
                            value: "Checked Out",
                          },
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item container spacing={2} justify="center">
                <Grid item xs={12} lg={3} md={3} sm={12}>
                  <ActionButton
                    type="submit"
                    label="Add Part"
                    startIcon={<AddCircleIcon />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default React.memo(AddEditPartForm);
