import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    facebook: false,
    google: false,
  });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
