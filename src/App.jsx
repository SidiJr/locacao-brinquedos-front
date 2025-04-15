import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import FormClientes from "./pages/Clientes/FormClientes";
import FormLocacoes from "./pages/Locacoes/FormLocacoes";
import ListLocacoes from "./pages/Locacoes/ListLocacoes";
import ListClientes from "./pages/Clientes/ListClientes";
import SideBar from "./components/UI/SideBar";

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
    <div className="flex min-h-screen">
      {isAuthenticated && <SideBar/>}
      <div className="w-full">
        {isAuthenticated && <NavBar />}
        <div>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/locacoes/list" element={<ListLocacoes/>} />
            <Route path="/locacoes/form" element={<FormLocacoes />} />
            <Route path="/clientes/list" element={<ListClientes />} />
            <Route path="/clientes/form" element={<FormClientes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

