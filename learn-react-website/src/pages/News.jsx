import React, { useEffect, useReducer, useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import { PostNewsProvider, usePostListContext } from "../hooks/FetchNews";
import axios from "axios"

const News = () => {
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const { postList, handleUpdatePostList} = usePostListContext(PostNewsProvider);
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });

  useEffect(() => {
    if (!postList){
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTimeout(() => {
          handleUpdatePostList(response.data);
          dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        }, 5000);
        
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }}, []);

  if (postsResult.loading && !postList) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000000",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  if (postsResult.error && !postList) {
    return <div>Error: {postsResult.error}</div>;
  }

  const handleOpenResetDialog = () => {
    setResetDialogOpen(true);
  };

  const handleCloseResetDialog = () => {
    setResetDialogOpen(false);
  };

  const handleDelete = (currentCardId) => {
    const updatedPostsList = postList.filter(
      (post) => post.id !== currentCardId
    );
    handleUpdatePostList(updatedPostsList);
  };

  const handleReverseSort = () => {
    let reversePost = [...postList];
    reversePost.reverse();
    handleUpdatePostList(reversePost)
  };

  const handleAlphabeticalSorting = () => {
    let alphabeticalPost = [...postList];
    alphabeticalPost.sort((post1, post2) => post1.title.localeCompare(post2.title));
    handleUpdatePostList(alphabeticalPost);
  };

  const handleReset = () => {
    if (postList == postsResult.posts){
     alert("You have not made any changes...") 
    } else {
       handleUpdatePostList(postsResult.posts);
       handleCloseResetDialog();
    }
  };


  return (
    <div
      className="News componentBox"
      style={{
        margin: "60px 30px 20px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "black",
          textDecoration: "underline",
          marginBottom: "20px",
        }}
      >
        Latest News
      </h1>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleReverseSort()}
          style={{ backgroundColor: "#5296a5" }}
        >
          reverse
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleAlphabeticalSorting()}
          style={{ backgroundColor: "#5296a5" }}
        >
          Alphabetical Order
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpenResetDialog}
          style={{ backgroundColor: "#5296a5" }}
        >
          Reset all changes
        </Button>
      </div>
      <Grid container spacing={2}>
        {postList.map((post) => (
          <Grid item key={post.id} xs={12} md={6} lg={4}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              sx={{ backgroundColor: "#EDEDF4" }}
            >
              <CardContent style={{ flexGrow: 1 }}>
                <Typography
                  color="#000000"
                  textTransform="uppercase"
                  textAlign="center"
                  variant="h6"
                >
                  {post.title}
                </Typography>
                <Typography textAlign="center" variant="body2">
                  {post.body}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(post.id)}
                style={{
                  margin: "0 auto 10px auto",
                  backgroundColor: "#5296a5",
                }}
              >
                Hide Post
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={resetDialogOpen}
        onClose={handleCloseResetDialog}
        aria-labelledby="reset-dialog-title"
        aria-describedby="reset-dialog-description"
      >
        <DialogTitle id="reset-dialog-title">Reset Changes</DialogTitle>
        <DialogContent>
          <DialogContentText id="reset-dialog-description">
            Are you sure you want to reset all changes? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseResetDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReset} color="primary" autoFocus>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default News;

function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}