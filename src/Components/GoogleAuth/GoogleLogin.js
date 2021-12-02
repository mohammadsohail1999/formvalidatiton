import React from "react";
import { GoogleLogin } from "react-google-login";
import { GetAuthState } from "../../Context/Auth/AuthContext";

const GoogleLoginComp = ({ renderComp }) => {
  const { setAuth, auth } = GetAuthState();

  const loginWithGoogleSuccess = (res) => {
    setAuth({ ...auth, google: true });
    console.log(res.profileObj);
  };
  const loginwithGoogleFailure = (res) => {
    console.log(res);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        render={renderComp}
        // isSignedIn={true}
        onSuccess={loginWithGoogleSuccess}
        onFailure={loginwithGoogleFailure}
        cookiePolicy={"single_host_origin"}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default GoogleLoginComp;
