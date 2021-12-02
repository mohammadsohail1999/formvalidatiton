import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { GetAuthState } from "../../Context/Auth/AuthContext";
// eslint-disable-next-line no-unused-vars
import app from "../../firebase";
const provider = new GoogleAuthProvider();
const firebaseauth = getAuth();

const GoogleFireBaseLogin = () => {
  const { setAuth, auth } = GetAuthState();

  const signIn = () => {
    signInWithPopup(firebaseauth, provider)
      .then((res) => {
        console.log(res.user);
        setAuth({ ...auth, fireBaseLogin: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      sx={{ marginTop: "1rem" }}
      fullWidth
      color="warning"
      variant="contained"
      onClick={signIn}
    >
      <GoogleIcon sx={{ marginRight: "1rem" }} />
      Log In with Google Firebase.
    </Button>
  );
};

export default GoogleFireBaseLogin;
