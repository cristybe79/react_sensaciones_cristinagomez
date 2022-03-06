import React, { createContext, useState } from "react";



export const UserAutContext = createContext();

export const UserAutProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();





    return (
      <UserAutContext.Provider value={{ user,setUser,isAuthenticated,setIsAuthenticated}}>
        {children}
      </UserAutContext.Provider>
    );
}

