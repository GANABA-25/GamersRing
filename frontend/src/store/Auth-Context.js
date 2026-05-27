import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [fetchedGames, setFetchedGames] = useState([]);
  const [fetchedGamesErrorMessage, setFetchedGamesErrorMessage] = useState([]);

  const [commentedUserName, setCommentedUserName] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        fetchedGames,
        setFetchedGames,
        fetchedGamesErrorMessage,
        setFetchedGamesErrorMessage,
        commentedUserName,
        setCommentedUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
