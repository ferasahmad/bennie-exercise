import React from "react";

import { makeStyles } from '@material-ui/core/styles';


const Detail = ({label, detail}) => {
  const classes = useStyles();

  return (
    <div className={classes.detailContainer}>
      <p className={classes.label}>{label}</p>
      <p className={classes.detail}>{detail}</p>
    </div>
  );
}

const useStyles = makeStyles({
  detailContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "48%",
    height: "50px",
    padding: "0 20px 0 20px",
    background: "#f5f7fa",
    boxSizing: "border-box",
    borderRadius: "5px",
    marginBottom: "10px"
  },
  label: {

  },
  detail: {
    fontWeight: 600
  },
});

export default Detail;
