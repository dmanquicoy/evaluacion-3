function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {enlace ? (
        <a href={enlace} target="_blank" rel="noreferrer">
          Ver repositorio
        </a>
      ) : (
        <p className="pendiente">Repositorio pendiente de publicar</p>
      )}
    </article>
  );
}

export default TarjetaProyecto;