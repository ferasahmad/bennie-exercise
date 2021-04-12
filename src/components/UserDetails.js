import React from "react";

import { makeStyles } from '@material-ui/core/styles';




function UserDetails() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      USER DETAILS!!!
    </div>
  );
}

const useStyles = makeStyles({
  container: {}
});

export default UserDetails;