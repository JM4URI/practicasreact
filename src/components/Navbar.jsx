import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </>
  );
}

export default Navbar;
