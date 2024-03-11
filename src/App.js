import React from 'react';
import './App.css'; // Todos los estilos estarán aquí
import FacultyCard from './components/FacultyCard';
import backgroundImage from './images/background.jpg'; // Asegúrate de que esta imagen está en tu carpeta de imágenes

// Objeto con los datos de las facultades, incluyendo la imagen y el color de fondo
const faculties = [
  { name: "Agropecuaria y de Recursos Naturales Renovables", image: "agropecuaria.jpg", link: "https://ejemplo.com/agropecuaria", color: 'green' },
  { name: "Educación, el Arte y la Comunicación", image: "educacion.jpg", link: "https://ejemplo.com/educacion", color: 'yellow' },
  { name: "Energía, las Industrias y los Recursos Naturales no Renovables", image: "energia.jpg", link: "https://orbix360.com/t/zECBH45BgPNRRFBX8lEjIscCrgm2/4699527850229760", color: 'red' },
  { name: "Jurídica, Social y Administrativa", image: "juridica.jpg", link: "https://ejemplo.com/juridica", color: 'orange' },
  { name: "Salud Humana", image: "salud.jpg", link: "https://ejemplo.com/salud", color: 'blue' },
  { name: "Unidad de Educación a Distancia y en Línea", image: "educacion_distancia.jpg", link: "https://ejemplo.com/distancia", color: 'purple' },
];

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="faculty-grid">
        {faculties.map((faculty, index) => (
          <FacultyCard
            key={index}
            name={faculty.name}
            image={faculty.image}
            link={faculty.link}
            color={faculty.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
