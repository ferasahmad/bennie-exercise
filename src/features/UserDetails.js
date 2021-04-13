import React, { Fragment, useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider } from "@material-ui/core";

import { getUser, getUserPosts } from "../api"; 
import Detail from "../components/Detail";




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

  console.log(posts);

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
              <Detail label="Username" detail={user.username} />
              <Detail label="Email" detail={user.email} />
              <Detail label="Phone number" detail={user.phone} />
              <Detail label="Company" detail={user.company.name} />
              <Detail label="Address" detail={user.address.city} />
            </div>
            <div className={classes.postsContainer}>
              {
                posts.map((post) => (
                  <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
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
    background: "#f5f7fa",
    width: "100%",
    borderRadius: "5px",
    marginTop: "25px",
  },
});

export default UserDetails;