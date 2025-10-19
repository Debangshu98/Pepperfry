import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { username: "Dummy", password: "123456" },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };


  const handleSignup = (username, password) => {
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      return { success: false, message: "Username already exists" };
    }
    const newUser = { username, password };
    setUsers([...users, newUser]);
    return { success: true };
  };

  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, isLoggedIn, currentUser, handleLogin, handleLogout, handleSignup }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use in other components
export const useAuth = () => useContext(AuthContext);
