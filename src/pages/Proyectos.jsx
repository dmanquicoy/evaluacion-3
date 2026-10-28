import TarjetaProyecto from "../components/TarjetaProyecto.jsx";

const proyectos = [
  {
    titulo: "RamoAlerta",
    descripcion:
      "Aplicación web para organizar ramos, notas y evaluaciones. Usa FastAPI, SQLAlchemy y JavaScript, y se conecta con Google Calendar, esta vesion del repositorio esta desactualizada.",
    enlace: "https://github.com/diegomanquecoy6-maker/Ramo-Alerta.git",
  },
  {
    titulo: "Dachshund",
    descripcion:
    "Web la cual fue creada en clases echa para dar a conocer informacion sobre perros dachshund",
    enlace: "https://github.com/diegomanquecoy6-maker/info-dashunds.git",
  },
  {
    titulo: "Calculadora",
    descripcion:
      "esto fue echo para una evaluacion integrada de desempeño en calculo, esto calcula y grafica limites.",
    enlace: "https://github.com/BenjaVarela/Evaluacion_Integrada_1_-EID-.git",
  },
];

function Proyectos() {
  return (
    <section className="seccion">
      <h1>Proyectos</h1>
      <p>Algunos de los proyectos en los que he trabajado.</p>
      <div className="rejilla-tarjetas">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.titulo}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;