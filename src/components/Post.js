import React from "react";

import { makeStyles } from '@material-ui/core/styles';


const Body = ({title, body}) => {
  const classes = useStyles();

  return (
    <div className={classes.post}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.body}>{body}</p>
    </div>
  );
}

const useStyles = makeStyles({
  post: {
    background: "#f5f7fa",
    borderRadius: "5px",
    marginBottom: "10px",
    padding: "10px"
  },
  title: {
    marginTop: 0,
  },
});

export default Body;
