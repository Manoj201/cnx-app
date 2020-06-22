import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

import AddEditPartForm from "app/modules/part/forms/AddEditPart.form";
import { ActionButton } from "app/shared/components";

import Actions from "app/modules/part/actions/Part.actions";

const AddEditPartContainer = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const saving = useSelector((state) => state.partState.addEditPartLoading);
  const savingError = useSelector((state) => state.partState.addEditPartError);
  const prevSaving = usePrevious(saving);

  React.useEffect(() => {
    if (prevSaving && !saving && !savingError) {
      history.push("/app/part-list");
    }
  }, [history, prevSaving, saving, savingError]);

  const handleNavigateBack = React.useCallback(() => {
    history.goBack();
  }, [history]);

  const handleOnSubmit = React.useCallback(
    (values) => {
      dispatch(Actions.addEditPart(values));
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <Grid container justify="flex-end">
        <ActionButton
          label="Go Back"
          startIcon={<ArrowBackIosIcon />}
          onClick={handleNavigateBack}
        />
      </Grid>
      <AddEditPartForm onSubmit={handleOnSubmit} saving={saving} />
    </React.Fragment>
  );
};

const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default React.memo(AddEditPartContainer);
