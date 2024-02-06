import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useUserContext } from "../library/UserContext"
import { Link } from "react-router-dom";

export default function NavBar() {
  const { currentUser, LoggedIn } = useUserContext()
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" sx={{ backgroundColor: "#DB222A" }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              news.io
            </Typography>
            {LoggedIn.current && (
              <Typography
                textAlign="center"
                variant="h7"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Welcome <span style={{textDecoration: "underline"}}>{currentUser.name}</span>, you can now access all
                features!
              </Typography>
            )}
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/AddNews">
              +
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}