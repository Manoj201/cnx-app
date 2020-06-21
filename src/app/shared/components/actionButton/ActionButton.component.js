import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
  },
  wrapper: {
    position: "relative",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ActionButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          type={props.type}
          onClick={props.onClick}
          disabled={props.loading || props.disabled}
          variant={props.variant}
          color={props.color}
          size={props.size}
          startIcon={props.startIcon}
          style={{
            width: "100%",
          }}
        >
          {props.label}
        </Button>
        {props.loading && (
          <CircularProgress size={24} className={classes.loader} />
        )}
      </div>
    </div>
  );
};

ActionButton.defaultProps = {
  label: "Button",
  loading: false,
  variant: "contained",
  color: "primary",
  size: "small",
  disabled: false,
  startIcon: null,
  type: null,
  onClick: () => {},
};

ActionButton.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  startIcon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(ActionButton);
