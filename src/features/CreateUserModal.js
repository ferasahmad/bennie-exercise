import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

import Input from "../components/Input";

const CreateUserModal = ({ users, setUsers }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState();

  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);

  useEffect(() => {
    setEmailValid(true);
  },[email]);

  useEffect(() => {
    setNameValid(true);
  }, [name]);

  useEffect(() => {
    setPhoneValid(true);
  }, [phone]);

  useEffect(() => {
    setUsernameValid(true);
  }, [username]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createUser = () => {
    if(!email) {
      setEmailValid(false);
    }
    if(!name) {
      setNameValid(false);
    }
    if(!username) {
      setUsernameValid(false);
    }
    if(!phone) {
      setPhoneValid(false);
    }
    if(email && name && username && phone) {
      setUsers([...users, { email, name, username, phone, id: 100}]);

      setEmail("");
      setName("");
      setPhone(null);
      setUsername("");
  
      setOpen(false);
    } 
  };

  return (
    <div className={classes.container}>
      <Button className={classes.addNewUserButton} onClick={handleClickOpen}>
        ADD NEW USER +
      </Button>
      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
        <DialogTitle className={classes.header}>Create new user</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Input 
            error={!emailValid} 
            label="Email" 
            type="email" 
            value={email} 
            onChange={(value) => 
            setEmail(value)}  
          />
          <Input 
            error={!nameValid} 
            label="Full name" 
            type="text" value={name} 
            onChange={(value) => 
            setName(value)} 
          />
          <Input 
            error={!usernameValid} 
            label="Username" 
            type="text" 
            value={username} 
            onChange={(value) => setUsername(value)} 
          />
          <Input 
            error={!phoneValid} 
            label="Phone number" 
            type="number" 
            value={phone} 
            onChange={(value) => setPhone(value)} 
          />
        </DialogContent>
        <DialogActions className={classes.footer}>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={createUser} variant="outlined" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  dialog: {

  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  header: {
    backgroundColor: "#276df7",
    color: "white",
    padding: "16px 29px 16px 29px",
    marginBottom: "10px",
  },
  footer: {
    margin: "0 24px 24px 24px",
    padding: 0,
  },
  addNewUserButton: {
    backgroundColor: "white",
    fontSize: "13px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#e8e8e8"
    }
  },
});

export default CreateUserModal;
