import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import app from "../../firebase";
import { FirebaseLoginsuccess } from "../../Features/AuthSlice";
const provider = new GoogleAuthProvider();
const firebaseauth = getAuth();

const GoogleFireBaseLogin = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(firebaseauth, provider)
      .then((res) => {
        const { uid, photoURL, email, displayName } = res.user;
        const authObj = {
          uid,
          photoURL,
          email,
          displayName,
        };
        dispatch(FirebaseLoginsuccess(authObj));
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
