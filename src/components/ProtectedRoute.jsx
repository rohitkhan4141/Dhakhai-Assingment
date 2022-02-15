import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { getToken } = useAuth();
  const token = getToken();
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to='/' />;
      }}
    ></Route>
  );
}
