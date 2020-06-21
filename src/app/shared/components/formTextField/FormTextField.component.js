import React from "react";
import TextField from "@material-ui/core/TextField";

const FormTextField = ({ field, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      value={field.value ? field.value : ""}
      fullWidth
      size="small"
      helperText={props.error && props.errorMessage}
      variant="outlined"
    />
  );
};

export default FormTextField;
