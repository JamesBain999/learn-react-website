import { usePostListContext, PostNewsProvider } from "../hooks/FetchNews";
import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";

export default function AddNewsPost() {
  const { postList, handleUpdatePostList } =
    usePostListContext(PostNewsProvider);

  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleText) {
      setSubmitResult("Post must have a title!");
    } else if (bodyText === titleText) {
      setSubmitResult("The body of text and title cannot be the same");
    } else if (bodyText.length < 10) {
      setSubmitResult(
        "The body of text Must be greater than 10 characters long"
      );
    } else {
      setSubmitResult("Successfully posted your article");
      const updatedPostList = [
        ...postList,
        {
          userId: 1,
          id: postList.length + 1,
          title: titleText,
          body: bodyText,
        },
      ];
      handleUpdatePostList(updatedPostList);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "black" }}>
        Lets add a Post!
      </h1>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ backgroundColor: "#EDEDF4", padding: "20px" }}
        >
          <Typography component="div" align="center">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Body"
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px", backgroundColor: "#5296a5" }}
              >
                Submit your article
              </Button>
              <br />
              {submitResult}
            </form>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
