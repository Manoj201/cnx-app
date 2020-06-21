import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

import PartItem from "app/modules/part/components/PartItem/PartItem.component";
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

const PartListContainer = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();

  React.useEffect(() => {
    dispatch(Actions.getPartList());
  }, [dispatch]);

  const partList = useSelector((state) => state.partState.partList);
  const loading = useSelector((state) => state.partState.partListLoading);
  // const partListError = useSelector((state) => state.partState.partListError);

  const handleClickAddPart = React.useCallback(() => {
    history.push("/app/new-part");
  }, [history]);

  return (
    <React.Fragment>
      <Grid container spacing={2} direction="column">
        <Grid item container justify="flex-end">
          <ActionButton
            label="Add Part"
            onClick={handleClickAddPart}
            startIcon={<AddCircleIcon color="secondary" />}
          />
        </Grid>
        {partList.map((part) => {
          return (
            <Grid item xs>
              <PartItem {...part} />
            </Grid>
          );
        })}
      </Grid>
      {loading && (
        <div className={classes.loader}>
          <CircularProgress size={30} />
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(PartListContainer);
