import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

import AddEditPartForm from "app/modules/part/forms/AddEditPart.form";
import { ActionButton } from "app/shared/components";

import Actions from "app/modules/part/actions/Part.actions";

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
}));

const AddEditPartContainer = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();

  React.useEffect(() => {
    dispatch(Actions.getPartList());
  }, [dispatch]);

  const handleNavigateBack = React.useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <React.Fragment>
      <Grid container justify="flex-end">
        <ActionButton
          label="Go Back"
          startIcon={<ArrowBackIosIcon />}
          onClick={handleNavigateBack}
        />
      </Grid>

      <AddEditPartForm />
    </React.Fragment>
  );
};

export default React.memo(AddEditPartContainer);
