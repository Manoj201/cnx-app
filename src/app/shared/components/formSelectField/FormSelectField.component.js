import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginTop: 0,
  },
}));

const FormSelectField = ({
  field,
  label,
  required,
  data,
  customOnChange,
  sertFieldValue,
  error,
  errorMessage,
  placeholder,
}) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      size={"small"}
    >
      <InputLabel ref={inputLabel} id="demo-simple-select-filled-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        {...field}
        onChange={(e) => field.onChange(e)}
        labelWidth={labelWidth}
        required={required}
      >
        {data &&
          data.map((item) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>;
          })}
      </Select>
      {error && errorMessage ? (
        <FormHelperText>{errorMessage}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default FormSelectField;
