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
import ListPapeis from "./pages/Papeis/ListPapeis";
import FormPapeis from "./pages/Papeis/FormPapeis";
import ListPermissoes from "./pages/Permissoes/ListPermissoes";
import FormPermissoes from "./pages/Permissoes/FormPermissoes";
import ListTipoBrinquedos from "./pages/TiposBrinquedos/ListTipoBrinquedos";
import FormTipoBrinquedos from "./pages/TiposBrinquedos/FormTipoBrinquedos";
import ListUsuarios from "./pages/Usuarios/ListUsuarios";
import FormUsuarios from "./pages/Usuarios/FormUsuarios";

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

            {/* Brinquedos */}
            <Route path="/brinquedos/list" element={<ListBrinquedos />} />
            <Route path="/brinquedos/form" element={<FormBrinquedos />} />
            <Route path="/brinquedos/form/:id" element={<FormBrinquedos />} />

            {/* Clientes */}
            <Route path="/clientes/list" element={<ListClientes />} />
            <Route path="/clientes/form" element={<FormClientes />} />
            <Route path="/clientes/form/:id" element={<FormClientes />} />

            {/* Locações */}
            <Route path="/locacoes/list" element={<ListLocacoes />} />
            <Route path="/locacoes/form" element={<FormLocacoes />} />
            <Route path="/locacoes/form/:id" element={<FormLocacoes />} />

            {/* Marcas */}
            <Route path="/marcas/list" element={<ListMarcas />} />
            <Route path="/marcas/form" element={<FormMarcas />} />
            <Route path="/marcas/form/:id" element={<FormMarcas />} />
            {/* <Route path="/marcas/:id" element={<Componente de Visualização/>} /> */}

            {/* Papeis */}
            <Route path="/papeis/list" element={<ListPapeis />} />
            <Route path="/papeis/form" element={<FormPapeis />} />
            <Route path="/papeis/form/:id" element={<FormPapeis />} />

            {/* Permissoes */}
            <Route path="/permissoes/list" element={<ListPermissoes />} />
            <Route path="/permissoes/form" element={<FormPermissoes />} />
            <Route path="/permissoes/form/:id" element={<FormPermissoes />} />

            {/* TiposBrinquedos */}
            <Route path="/tipo-brinquedos/list" element={<ListTipoBrinquedos />} />
            <Route path="/tipo-brinquedos/form" element={<FormTipoBrinquedos />} />
            <Route path="/tipo-brinquedos/form/:id" element={<FormTipoBrinquedos />} />

            {/* Usuarios */}
            <Route path="/usuarios/list" element={<ListUsuarios />} />
            <Route path="/usuarios/form" element={<FormUsuarios />} />
            <Route path="/usuarios/form/:id" element={<FormUsuarios />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};
