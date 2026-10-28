const habilidades = [
  { nombre: "HTML y CSS", nivel: "Básico", valor: 55 },
  { nombre: "JavaScript", nivel: "Principiante", valor: 25 },
  { nombre: "Python", nivel: "Básico", valor: 60 },
  { nombre: "SQL", nivel: "Intermedio", valor: 80 },
  { nombre: "Git y GitHub", nivel: "Principiante", valor: 20 },
  { nombre: "React", nivel: "Principiante", valor: 15 },
];

function Habilidades() {
  return (
    <section className="seccion">
      <h1>Habilidades</h1>
      <p>Estos son los lenguajes y herramientas que estoy aprendiendo, con mi nivel actual.</p>
      <ul className="lista-habilidades">
        {habilidades.map((habilidad) => (
          <li key={habilidad.nombre}>
            <div className="habilidad-titulo">
              <span>{habilidad.nombre}</span>
              <span className="nivel">{habilidad.nivel}</span>
            </div>
            <progress value={habilidad.valor} max="100">
              {habilidad.valor}%
            </progress>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;