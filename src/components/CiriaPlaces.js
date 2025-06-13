import React from 'react';
import castilloImg from '../Assets/Images/CastilloCiria.webp';
import iglesiaImg from '../Assets/Images/iglesia.webp';
import rioImg from '../Assets/Images/Rio.webp';
import plazaImg from '../Assets/Images/PlazaMayor.webp';
import lavaderoImg from '../Assets/Images/Lavadero_de_Ciria.webp';

const CiriaPlaces = () => {
  const places = [
    {
      name: 'Castillo de Ciria',
      description: 'Imponente fortaleza medieval que domina el paisaje, ofreciendo vistas panorámicas.',
      image: castilloImg,
      coords: '41.621150249432404, -1.9684660438051766'
    },
    {
      name: 'Iglesia de Ntra Señora La Mayor',
      description: 'Edificio religioso con elementos románicos y góticos, un tesoro arquitectónico.',
      image: iglesiaImg,
      coords: '41.61878373876499, -1.965697190975157'
    },
    {
      name: 'Río Manubles',
      description: 'Ideal para paseos y disfrutar de la naturaleza por el cañon en el cual discurre.',
      image: rioImg,
      coords: '41.64011614096962, -1.9615979268890462'
    },
    {
      name: 'Plaza Mayor',
      description: 'Ayuntamiento de la villa, frontón y Bar Cafetería la Plaza.',
      image: plazaImg,
      coords: '41.61805545521695, -1.9666890146494072'
    },
    {
      name: 'Lavadero Público',
      description: 'Antiguo lavadero que refleja la vida cotidiana de antaño.',
      image: lavaderoImg,
      coords: '41.61792311257265, -1.9659621360262496'
    }
  ];

  return (
    <section id="places" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Lugares Emblemáticos de Ciria</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={place.image} alt={place.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{place.name}</h3>
                <p className="text-gray-600 mb-4">{place.description}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.coords}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Ver en Mapa
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Ubicación de Ciria</h3>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg mx-auto">
            <iframe
              title="Google Maps de Ciria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0!2d-2.0000!3d41.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd441f0000000000%3A0x0!2sCiria%2C%20Soria!5e0!3m2!1ses!2ses!4v1678901234567!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CiriaPlaces;