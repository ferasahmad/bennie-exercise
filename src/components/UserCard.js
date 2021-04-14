import React, { Fragment } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";


const UserCard = ({ user }) => {
  const history = useHistory();
  const classes = useStyles();

  const onClickUser = () => {
    history.push(`/user-details/${user.id}`)
  };

  return (
    <div className={classes.card}>
      <Button className={classes.avatarAndName} onClick={onClickUser}>
        <Avatar className={classes.avatar}>
          {user?.name?.charAt(0).toUpperCase()}
        </Avatar>
        <h3 className={classes.name}>{user.name}</h3>
      </Button>
      <Divider className={classes.divider} />
      {user.posts.length !== 0 ? 
        <Fragment>
          <div className={classes.post}>
            <p className={classes.postTitle}>{user.posts[0].title}</p>
          </div>
          <div className={classes.post}>
            <p className={classes.postTitle}>{user.posts[1].title}</p>
          </div>
          <div className={classes.post}>
            <p className={classes.postTitle}>{user.posts[2].title}</p>
          </div>
        </Fragment>  : 
        <div className={classes.noPostsContainer}>
          <p>NO POSTS</p>
        </div>
        }
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    width: "300px",
    height: "300px",
    background: "white",
    margin: "7px",
    padding: "20px",
    boxSizing: "border-box",
    '@media(max-width: 692px)' : {
      width: "100%",
      margin: "7px 0 7px 0",
    }
  },
  noPostsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarAndName: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    alignItems: "center",
    '@media(max-width: 692px)' : {
      justifyContent: "flex-start",
    }
  },
  name: {
    marginLeft: "10px",
    textAlign: "left",
    textTransform: "capitalize",
    width: "200px",
    height: "25px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  avatar: {
    background: "#276df7"
  },
  divider: {
    margin: "10px 0 10px 0"
  },
  post: {
    background: "#f5f7fa",
    marginBottom: "5px",
    padding: "2px 7px 2px 7px",
    borderRadius: "5px",
  },
  postTitle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }
});

export default UserCard;
