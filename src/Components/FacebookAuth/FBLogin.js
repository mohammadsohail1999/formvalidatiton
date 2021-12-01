import React from "react";

import { GetAuthState } from "../../Context/Auth/AuthContext";
import FacebookLogin from "react-facebook-login";

const FBLogin = ({ renderComp }) => {
  const { setAuth, auth } = GetAuthState();

  console.log(renderComp);

  const loginWithFacebookSuccess = (res) => {
    setAuth({ ...auth, facebook: true });
    console.log(res);
  };

  const onClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        fields="name,email,picture"
        callback={loginWithFacebookSuccess}
        onClick={onClick}
        icon={
          <i className="fab fa-facebook-f" style={{ marginLeft: "5px" }}></i>
        }
        cssClass="btnFacebook"
        textButton="&nbsp;&nbsp;"
      />
    </>
  );
};

export default FBLogin;
