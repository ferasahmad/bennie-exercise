import React from "react";

import { TextField } from "@material-ui/core";


const Input = ({label, type, value, onChange, error, helperText}) => {

  return (
    <TextField
      error={error}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      variant="outlined"
      margin="dense"
      label={label}
      type={type}
      style={{width: "323px", marginBottom: "15px"}}
    />
  );
}

export default Input;
