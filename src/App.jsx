import "./scss/styles.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<UserDetails/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
