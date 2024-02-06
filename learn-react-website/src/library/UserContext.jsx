import React from "react";
import { useContext, useState, useRef } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const LoggedIn = useRef(false)
  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser, LoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};