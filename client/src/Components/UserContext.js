import React, { createContext, useState, useMemo } from 'react';

export const UserContext = createContext(null);

export const UserContextProvider = props => {
  const [user, setUser] = useState(null);
  const contextValue = useMemo(() => ({user, setUser}), [user, setUser]);
  
  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
