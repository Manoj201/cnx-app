import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import {
  FormTextField,
  FormSelectField,
  ActionButton,
} from "app/shared/components";
import FormField from "app/modules/part/components/formField/FormField.component";

const PartSchema = Yup.object({
  name: Yup.string().required("Part Name Required"),
  code: Yup.string().required("Part Code Required"),
  status: Yup.string().required("Part Status Required"),
});

const statusData = [
  {
    label: "Checked In",
    value: "Checked In",
  },
  {
    label: "Checked Out",
    value: "Checked Out",
  },
];

const AddEditPartForm = (props) => {
  const { onSubmit, saving } = props;
  const handleSubmit = React.useCallback(
    (values) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  return (
    <Formik
      initialValues={{
        name: "",
        code: "",
        status: "",
      }}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={PartSchema}
    >
      {(formikProps) => {
        const { errors, touched } = formikProps;
        return (
          <Form>
            <Grid container direction="column" spacing={4}>
              <FormField
                label=" Part Name *"
                fieldProps={{
                  name: "name",
                  component: FormTextField,
                  placeholder: "Enter Part Name",
                  required: true,
                  error: errors.name && touched.name,
                  errorMessage: errors.name,
                }}
              />
              <FormField
                label=" Part Code *"
                fieldProps={{
                  name: "code",
                  component: FormTextField,
                  placeholder: "Enter Part Code",
                  required: true,
                  error: errors.code && touched.code,
                  errorMessage: errors.code,
                }}
              />
              <FormField
                label=" Part Status *"
                fieldProps={{
                  data: statusData,
                  name: "status",
                  label: "Select Part Status",
                  component: FormSelectField,
                  required: true,
                  error: errors.status && touched.status,
                  errorMessage: errors.status,
                }}
              />
              <Grid item container spacing={2} justify="center">
                <Grid item xs={12} lg={3} md={3} sm={12}>
                  <ActionButton
                    type="submit"
                    label="Add Part"
                    startIcon={<AddCircleIcon />}
                    loading={saving}
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
