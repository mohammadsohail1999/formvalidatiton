import { Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import { LoginvalidationSchema } from "../../Schemas/loginSchema";
import { Google } from "@mui/icons-material";
import GoogleLoginComp from "../../Components/GoogleAuth/GoogleLogin";
import FBLogin from "../../Components/FacebookAuth/FBLogin";
import GoogleFireBaseLogin from "../../Components/FirebaseAuth/GoogleAuthProvider";

const Login = () => {
  const {
    handleSubmit,
    // values,
    touched,
    errors,
    getFieldProps,
    handleReset,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",

      isLoggedin: false,
    },
    onSubmit: (values) => {
      console.log(values);
      handleReset();
    },
    validationSchema: LoginvalidationSchema,
  });

  return (
    <div className="form_container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          icon={"far fa-envelope"}
          placeholder={"Email ID"}
          type={"email"}
          {...getFieldProps("email")}
        />
        {touched.email && errors.email ? (
          <div className="errorMessage">*{errors.email}</div>
        ) : null}

        <Input
          icon={"fas fa-key"}
          placeholder={"Password"}
          type="password"
          {...getFieldProps("password")}
        />
        {touched.password && errors.password ? (
          <div className="errorMessage">*{errors.password}</div>
        ) : null}
        <div className="input_Wrapper">
          <input
            {...getFieldProps("isLoggedin")}
            id="checkbox"
            type="checkbox"
          />
          <label style={{ marginLeft: "1rem" }} htmlFor="checkbox">
            Keep me Logged in
          </label>
        </div>
        <Button
          sx={{ background: "#000" }}
          variant="contained"
          type={"submit"}
          fullWidth
        >
          Log In
        </Button>
        {/* <Button sx={{ margin: "1rem 0" }} fullWidth variant="contained">
          <Facebook />
        </Button> */}

        <FBLogin />

        <GoogleLoginComp
          renderComp={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              fullWidth
              variant="contained"
              color="secondary"
            >
              <Google />
            </Button>
          )}
        />

        <GoogleFireBaseLogin />

        <div style={{ margin: "1rem 0" }}>
          Did'nt have a account ? <Link to="/signUp">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
