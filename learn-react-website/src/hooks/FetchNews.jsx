import React, { createContext, useState, useContext} from "react";

const PostNewsContext = createContext();

export const PostNewsProvider = ({ children }) => {
  const [postList, setPostList] = useState(null);
  const handleUpdatePostList = (postList) => {
    setPostList(postList);
  };
  return (
    <PostNewsContext.Provider value={{postList, handleUpdatePostList}}>
      {children}
    </PostNewsContext.Provider>
  );
};

export const usePostListContext = () => {
  return useContext(PostNewsContext);
};