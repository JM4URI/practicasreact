import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <div>
            <h1>Bienvenido a la Actividad 10</h1>
            <p>
                <strong>Objetivo de la actividad:</strong><br />
                Que el alumno comprenda y utilice React Router DOM para crear una navegación funcional entre distintas secciones de una aplicación web, 
                <br />culminando con una página de inicio (homepage) correctamente configurada.
            </p>
            <button onClick={() => navigate('/about')}>Acerca de </button>
            <button onClick={() => navigate('/contact')}>Contacto</button>
        </div>
    </>
  );
}

export default Home;
