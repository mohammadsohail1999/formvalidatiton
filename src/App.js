import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import { GetAuthState } from "./Context/Auth/AuthContext";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const { auth } = GetAuthState();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("user", user);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="signUp" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
