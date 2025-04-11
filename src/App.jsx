import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import FormLocacao from "./pages/Locacoes/FormLocacoes";
import FormClientes from "./pages/Clientes/FormClientes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthContent />
      </Router>
    </AuthProvider>
  );
}

export default App;

const AuthContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated && <NavBar />}
      <div>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/locacao" element={<About/>} /> */}
          <Route path="/locacaoes/form" element={<FormLocacao />} />
          {/* <Route path="/cliente" element={<About />} /> */}
          <Route path="/clientes/form" element={<FormClientes />} />
        </Routes>
      </div>
    </div>
  );
};

