function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Diego Manquicoy · {anioActual}</p>
    </footer>
  );
}

export default Footer;