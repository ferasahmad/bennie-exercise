import React from "react";

import { makeStyles } from '@material-ui/core/styles';


const Detail = ({label, detail, width}) => {
  const classes = useStyles();

  return (
    <div style={{ width: width }} className={classes.detailContainer}>
      <p>{label}</p>
      <p className={classes.detail}>{detail}</p>
    </div>
  );
}

const useStyles = makeStyles({
  detailContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    padding: "0 20px 0 20px",
    background: "#f5f7fa",
    boxSizing: "border-box",
    borderRadius: "5px",
    marginBottom: "10px",
    fontSize: "14px",
  },
  detail: {
    fontWeight: 600
  },
});

export default Detail;
