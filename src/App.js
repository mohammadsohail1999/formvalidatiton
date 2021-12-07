import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import Home from "./page/Home/Home";
// import Practice from "./Components/Practice";

// import { firebaseAuth } from "./firebase";
// // import { onAuthStateChanged } from "firebase/auth";
// import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="signUp" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
      {/* <Practice /> */}
    </div>
  );
}

export default App;
