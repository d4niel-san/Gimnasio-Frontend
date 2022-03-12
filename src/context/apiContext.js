import React, { useState, useEffect } from "react";

export const ApiContext = React.createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <ApiContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
