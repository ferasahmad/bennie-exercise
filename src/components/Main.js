import React, { useEffect, useState } from "react";

import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';


function Main() {
  const classes = useStyles();
  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ usersWithPosts, setUsersWithPosts ] = useState([]);

  useEffect(() => {
    handleGetUsers();
    handleGetPosts();
    // const result = users.map(user => ({ ...user, ...posts.find(post => post.id === user.id) }));
    // console.log("result", result)
    
  },[]);

  const handleGetUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("users", users);
  console.log("posts", posts);


  return (
    <div className={classes.container}>
      {
        users.map((user) => (
          <div key={user.id} className={classes.card}>
            <p>{user.name}</p>
          </div>
        ))
      }
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: "64px"
  },
  card: {
    display: "flex",
    borderRadius: "5px",
    justifyContent: "center",
    minWidth: "300px",
    height: "300px",
    background: "#807f81",
    margin: "7px",
  }
});

export default Main;
