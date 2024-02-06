import React from "react";
import { useState } from "react";
import { useUserContext } from "../library/UserContext";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";

export default function SignupForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { currentUser, handleUpdateUser, LoggedIn } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail, name: userName });
      LoggedIn.current = true;
    }
  };

  const handleLogOut = () => {
    handleUpdateUser({});
    LoggedIn.current = false;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column"
      }}
    >
      <h1 style={{ color: "black"}}>
        Please Sign in here
      </h1>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ backgroundColor: "#EDEDF4", padding: "20px" }}
        >
          <Typography component="div" align="center">
            {currentUser.email ? (
              <>
                <p>Welcome {currentUser.email}!</p>
                <Button onClick={() => handleLogOut()} variant="contained">
                  Log Out
                </Button>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
                <TextField
                  label="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
                <TextField
                  type="password"
                  label="Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: "20px", backgroundColor: "#5296a5" }}
                >
                  Login
                </Button>
              </form>
            )}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
