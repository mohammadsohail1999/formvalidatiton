import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import { GetAuthState } from "./Context/Auth/AuthContext";

function App() {
  const { auth } = GetAuthState();

  console.log(auth);

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
