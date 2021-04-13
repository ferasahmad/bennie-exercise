import React, { Fragment, useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from "@material-ui/core";

import { getUser, getUserPosts } from "../api"; 
import Detail from "../components/Detail";
import Post from "../components/Post";


function UserDetails() {
  const classes = useStyles();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    handleGetUserAndPosts();
  },[]);

  const handleGetUserAndPosts = async () => {
    try {
      const [usersResponse, postsResponse] = await Promise.all([
        getUser(1), 
        getUserPosts(1)
      ])

      setUser(usersResponse.data);
      setPosts(postsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <Fragment>
      {
        user && posts ? 
        <div className={classes.container}>
          <header className={classes.header}>
            <Avatar className={classes.avatar}>{user.name.charAt(0).toUpperCase()}</Avatar>
          </header>
          <div className={classes.contentContainer}>
            <div className={classes.userDetails}>
              <Detail width="49%" label="Username" detail={user.username ? user.username : "NONE"} />
              <Detail width="49%" label="Email" detail={user.email ? user.email : "NONE"} />
              <Detail width="49%" label="Phone number" detail={user.phone ? user.phone : "NONE"} />
              <Detail width="49%" label="Company" detail={user.company.name ? user.name : "NONE"} />
              <Detail width="100%" label="Address" detail={`${user.address.street} ${user.address.suite}, ${user.address.city}`} />
            </div>
            <div className={classes.postsContainer}>
              {
                posts.map((post) => (
                  <Post key={post.id} title={post.title} body={post.body} />
                ))
              }
            </div>
          </div>
        </div> :
        <div>
          LOADING
        </div>
      }
    </Fragment>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginTop: "80px",
    marginBottom: "80px",
    maxWidth: "900px",
    backgroundColor: "white",
    padding: "25px",
    margin: "0 25px 0 25px",
    boxSizing: "border-box"
  },
  header: {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: "flex-end",
    backgroundColor: "rgb(39, 109, 247)",
    width: "100%",
    height: "100.88px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    color: "rgb(39, 109, 247)",
    backgroundColor: "white",
    fontSize: "50px",
    bottom: -50,
  },
  userDetails: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderRadius: "5px",
    boxSizing: "border-box",
    justifyContent: "space-between"
  },
  postsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "25px",
  },
});

export default UserDetails;