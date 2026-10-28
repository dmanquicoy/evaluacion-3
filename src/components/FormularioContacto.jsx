import { useState } from "react";

const urlFormulario = "https://formspree.io/f/xljjnyge";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState("");

  function validarFormulario() {
    const nuevosErrores = {};
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "Escribe tu nombre.";
    }

    if (correo.trim() === "") {
      nuevosErrores.correo = "Escribe tu correo electrónico.";
    } else if (!formatoCorreo.test(correo.trim())) {
      nuevosErrores.correo = "El correo no tiene un formato válido. Ejemplo: nombre@correo.com";
    }

    if (mensaje.trim() === "") {
      nuevosErrores.mensaje = "Escribe un mensaje.";
    }

    return nuevosErrores;
  }

  async function manejarEnvio(evento) {
    evento.preventDefault();
    const nuevosErrores = validarFormulario();
    setErrores(nuevosErrores);
    setErrorEnvio("");

    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false);
      return;
    }

    setEnviando(true);

    try {
      const respuesta = await fetch(urlFormulario, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });

      if (respuesta.ok) {
        setEnviado(true);
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        setEnviado(false);
        setErrorEnvio("No se pudo enviar el mensaje. Intenta de nuevo más tarde.");
      }
    } catch (error) {
      setEnviado(false);
      setErrorEnvio("No hay conexión con el servicio de envío. Revisa tu internet.");
    }

    setEnviando(false);
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          className={errores.nombre ? "con-error" : ""}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
          className={errores.correo ? "con-error" : ""}
        />
        {errores.correo && <p className="error">{errores.correo}</p>}
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          rows="5"
          value={mensaje}
          onChange={(evento) => setMensaje(evento.target.value)}
          className={errores.mensaje ? "con-error" : ""}
        />
        {errores.mensaje && <p className="error">{errores.mensaje}</p>}
      </div>

      <button type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar mensaje"}
      </button>

      {enviado && (
        <p className="confirmacion">
          Mensaje enviado correctamente. Gracias por escribirme.
        </p>
      )}

      {errorEnvio && <p className="error">{errorEnvio}</p>}
    </form>
  );
}

export default FormularioContacto;