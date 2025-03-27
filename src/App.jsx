import "./App.css";
import React, { useContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useAuth, AuthProvider } from "./contexts/AuthContext";

function App() {
  const isAuthenticated = useAuth();

  return (
    <AuthProvider>
      <Router>
        {isAuthenticated && <NavBar />}
        <div>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
