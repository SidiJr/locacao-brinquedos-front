import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import FormClientes from "./pages/Clientes/FormClientes";
import ListClientes from "./pages/Clientes/ListClientes";
import FormLocacoes from "./pages/Locacoes/FormLocacoes";
import ListLocacoes from "./pages/Locacoes/ListLocacoes";
import FormBrinquedos from "./pages/Brinquedos/FormBrinquedos";
import ListBrinquedos from "./pages/Brinquedos/ListBrinquedos";
import FormMarcas from "./pages/Marcas/FormMarcas";
import ListMarcas from "./pages/Marcas/ListMarcas";
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
      {isAuthenticated && <SideBar />}
      <div className="w-full">
        {isAuthenticated && <NavBar />}
        <div>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/about" element={<About />} />
            {/* Locações */}
            <Route path="/locacoes/list" element={<ListLocacoes />} />
            <Route path="/locacoes/form" element={<FormLocacoes />} />
            {/* Clientes */}
            <Route path="/clientes/list" element={<ListClientes />} />
            <Route path="/clientes/form" element={<FormClientes />} />
            {/* Brinquedos */}
            <Route path="/brinquedos/list" element={<ListBrinquedos />} />
            <Route path="/brinquedos/form" element={<FormBrinquedos />} />
            {/* Marcas */}
            <Route path="/marcas/list" element={<ListMarcas />} />
            <Route path="/marcas/form" element={<FormMarcas />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
