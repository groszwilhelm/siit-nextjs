import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  let userDefaultState = null;

  if (typeof window !== 'undefined') {
    userDefaultState = JSON.parse(localStorage.getItem("user") || "{}");
  }

  const [user, setUser] = useState(userDefaultState);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(user?.roles?.includes("Admin"));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
}
