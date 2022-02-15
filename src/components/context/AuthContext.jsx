import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);

  async function loginUser(credentials) {
    const sortedCredentials = {
      auth: {
        email: credentials.email,
        deviceUuid: credentials.uid,
      },
      password: credentials.password,
    };
    const response = await fetch(
      "https://devapi.dhakai.com/api/v2/login-buyer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sortedCredentials),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw Error(data.message || "something went Wrong");
    }

    const { token } = data.result;
    setToken(token);
    setCurrentUser(true);
  }

  function setToken(token) {
    localStorage.setItem("jwt-token", token);
  }
  function getToken() {
    return localStorage.getItem("jwt-token");
  }
  function removeToken() {
    localStorage.removeItem("jwt-token");
  }

  const value = {
    currentUser,
    loginUser,
    setToken,
    getToken,
    removeToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
