import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  let authDefaultState = null;

  if (typeof window !== "undefined") {
    authDefaultState = localStorage.getItem("accessToken");
  }

  const [auth, setAuth] = useState(authDefaultState);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
