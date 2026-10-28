import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="seccion inicio">
      <img src="/mi-foto.jpg" alt="Foto de Diego" className="foto-perfil" />
      <h1>Hola, soy Diego Manquicoy</h1>
      <p className="rol">Estudiante de Ingeniería Civil Informática</p>
      <p>
        Estoy aprendiendo sobre el desarrollo de fronted con react para la elaboracion de paginas web
        y este es  mi portafolio donde podran conocerme.
      </p>
      <p>Recorre el portafolio para conocer lo que he aprendido y lo que he construido.</p>
      <Link to="/sobre-mi" className="boton">
        Conóceme
      </Link>
    </section>
  );
}

export default Inicio;