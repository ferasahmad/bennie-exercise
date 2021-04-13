import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import UserCard from "../components/UserCard";

import { sortAlphabetically } from "../utilities/sortAlphabetically";
import { getUsers, getPosts } from "../api";
import CreateUserModal from "./CreateUserModal";

// TODO: READ ABOUT SORT FUNCTION AND PROMISE ALL

const Main = () => {
  const classes = useStyles();
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsersAndPosts();
  },[]);

  const mergePostsWithUser = (users, posts) => {
    const newUsers = [];

    sortAlphabetically(users, 'name');
    sortAlphabetically(posts, 'title');

    for(let i = 0; i < users.length; i++) {
      console.log(users[i]);
      for(let e = 0; e < posts.length; e++) {
        if(users[i].id === posts[e].userId){
          const existingPosts = newUsers[i]?.posts || []
          newUsers[i] = {...users[i], posts: [...existingPosts, posts[e]]}
        }
      }
    } 

    setUsers(newUsers);
  };

  const getUsersAndPosts = async () => {
    try {
      const [usersResponse, postsResponse] = await Promise.all([
        getUsers(), 
        getPosts()
      ])
      
      mergePostsWithUser(usersResponse.data, postsResponse.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Bennie exercise</h1>
        <CreateUserModal users={users} setUsers={setUsers} />
      </header>
      <div className={classes.postsContainer}>
        { 
          users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        }
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    background: "#f5f7fa",
  },
  postsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "fit-content",
    justifyContent: "center",
    marginTop: "164px",
    paddingBottom: "64px",
  },
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    boxSizing: "border-box",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(39, 109, 247)",
    padding: "10px 100px 10px 100px",
  },
  headerTitle: {
    color: "white"
  }
});

export default Main;
