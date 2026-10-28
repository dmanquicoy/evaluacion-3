import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-interior">
        <span className="logo">Diego Manquicoy · Portafolio</span>
        <nav className="menu">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;