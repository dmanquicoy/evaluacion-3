import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Inicio from "./pages/Inicio.jsx";
import SobreMi from "./pages/SobreMi.jsx";
import Habilidades from "./pages/Habilidades.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import Contacto from "./pages/Contacto.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;