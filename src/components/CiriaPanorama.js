import React from 'react';


const CiriaPanorama = () => {
  return (
    <section id="panorama" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Explora Ciria en 360°</h2>
        <p className="text-xl text-gray-600 mb-8">Sumérgete en la belleza de Ciria con esta vista panorámica interactiva.</p>
        <div className="w-[80%] h-[700px] rounded-xl overflow-hidden shadow-lg mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!4v1749812740793!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDAyLXIyRlE.!2m2!1d41.61888117397476!2d-1.965886231627183!3f304.0992493883874!4f-24.811994254561228!5f0.4000000000000002" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default CiriaPanorama;