import { useEffect, useState, useCallback } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectItem, ProjectFeature } from '../data/mockData';

export const ProjectDetails = () => {
  const { id } = useParams();
  const { language: lang, t: siteData } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'exterior' | 'interior'>('todos');
  
  // Find project in the current language's siteData
  const project = siteData.projects.items.find((p: ProjectItem) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If project not found, redirect to home
  if (!project) return <Navigate to="/" />;

  const galleryItems = project.galleryItems || [];

  const filteredGallery = galleryItems.filter(
    (item: { category: string }) => activeFilter === 'todos' || item.category === activeFilter
  );

  // Lightbox navigation using filteredGallery
  const openLightbox = (indexInFiltered: number) => {
    setSelectedIndex(indexInFiltered);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => prev !== null ? (prev + 1) % filteredGallery.length : null);
  }, [filteredGallery.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null);
  }, [filteredGallery.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, goNext, goPrev, closeLightbox]);

  return (
    <div className="bg-white min-h-screen font-body">
      
      {/* 2. HERO SECTION */}
      <section className="relative pt-[140px] pb-12 lg:pb-16 px-6 lg:px-12 flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={project.image} className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:to-white/40 z-10 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Text */}
          <div className="text-primary">
            <h1 className="font-headline font-black text-5xl lg:text-6xl tracking-tighter mb-8 leading-tight drop-shadow-sm">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 font-light text-on-surface-variant font-body">
              {project.description}
            </p>
            <p className="text-lg font-bold mb-10 text-primary">
              <span className="material-symbols-outlined text-primary align-middle mr-2">location_on</span>
              {project.location}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {project.isRental && project.airbnbUrl ? (
                <a href={project.airbnbUrl} target="_blank" rel="noopener noreferrer" className="blue-gradient-btn px-8 py-4 rounded-xl font-headline font-extrabold text-base text-white shadow-lg hover:shadow-primary/30 transition-shadow inline-block">
                  {lang === 'es' ? 'Reserva en Airbnb' : 'Book on Airbnb'}
                </a>
              ) : (
                <button className="blue-gradient-btn px-8 py-4 rounded-xl font-headline font-extrabold text-base text-white shadow-lg hover:shadow-primary/30 transition-shadow">
                  {lang === 'es' ? 'Llama Ahora' : 'Call Now'}
                </button>
              )}
              {project.status && (
                <div className="px-6 py-4 rounded-xl border border-primary/10 bg-white/60 backdrop-blur-md font-headline font-bold text-primary flex items-center gap-3 text-sm">
                   <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                   {project.status} {project.delivery ? `(${project.delivery})` : ''}
                </div>
              )}
            </div>
          </div>
          
          {/* Right Floating Form */}
          <div className="lg:justify-self-end w-full max-w-[400px] bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
             <h2 className="text-primary font-headline font-black text-2xl mb-6 relative z-10">
               {project.isRental
                 ? (lang === 'es' ? '¿Listo para tus vacaciones?' : 'Ready for your perfect getaway?')
                 : (lang === 'es' ? '¿Listo para dar el siguiente paso?' : 'Ready to take the next step?')}
             </h2>
             <form className="space-y-3 relative z-10" onSubmit={e => e.preventDefault()}>
               <input type="text" placeholder={siteData.ui.contactForm.fullNamePlaceholder} className="w-full bg-white/90 border border-slate-100 text-on-surface rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm" />
               <input type="tel" placeholder={siteData.ui.contactForm.phonePlaceholder} className="w-full bg-white/90 border border-slate-100 text-on-surface rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm" />
               <input type="email" placeholder={siteData.ui.contactForm.emailPlaceholder} className="w-full bg-white/90 border border-slate-100 text-on-surface rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm" />
               
               {project.isRental && project.airbnbUrl ? (
                 <a href={project.airbnbUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-headline font-bold text-base transition-colors mt-2 text-center block">
                   {lang === 'es' ? 'Consultar Disponibilidad' : 'Check Availability'}
                 </a>
               ) : (
                 <button className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-headline font-bold text-base transition-colors mt-2">
                   {lang === 'es' ? 'Obtener Información' : 'Get Information'}
                 </button>
               )}
             </form>
          </div>
        </div>
      </section>

      {/* Hero Bottom Banner */}
      <div className="bg-primary text-white py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
           <span className="material-symbols-outlined text-4xl">rocket_launch</span>
           <span className="font-headline font-bold text-xl uppercase tracking-widest">
             {project.isRental
               ? (lang === 'es' ? 'Vive una experiencia inolvidable: ¡Reserva hoy mismo tu estancia en este paraíso!' : 'Experience an unforgettable stay: Book your getaway in paradise today!')
               : (lang === 'es' ? 'Convierte Tus Sueños en Realidad: ¡Completa el Formulario y Comienza tu Viaje a Casa!' : 'Turn your dreams into reality: complete the form and start your journey home!')}
           </span>
        </div>
      </div>

      {/* 3. FEATURES GRID */}
      <section className="py-24 bg-white px-6 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 - Community/Location */}
          <div className="text-center group">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-8 relative">
               <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Location" />
            </div>
            <h3 className="text-3xl font-headline font-black text-primary mb-4">
              {lang === 'es' ? 'Ubicación Estratégica' : 'Strategic Location'}
            </h3>
            <p className="text-lg text-on-surface-variant font-light">
              {project.longDescription}
            </p>
          </div>
          {/* Feature 2 - Technical Specs */}
          <div className="text-center group h-full flex flex-col">
            <div className="w-full flex-1 rounded-3xl bg-slate-50 p-4 sm:p-6 shadow-inner border border-slate-100 flex items-center justify-center mb-8 min-h-[400px]">
               <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full h-full">
                  <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/card hover:-translate-y-1 duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2 group-hover/card:scale-110 transition-transform">square_foot</span>
                    <span className="font-headline font-black text-lg xl:text-xl text-[#0a1235] text-center leading-tight">{project.sqft || '---'}</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-2 text-center">{lang === 'es' ? 'Área' : 'Area'}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/card hover:-translate-y-1 duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2 group-hover/card:scale-110 transition-transform">bed</span>
                    <span className="font-headline font-black text-xl xl:text-2xl text-[#0a1235] text-center leading-tight">{project.bedrooms || '---'}</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-2 text-center">{lang === 'es' ? 'Habitaciones' : 'Bedrooms'}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/card hover:-translate-y-1 duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2 group-hover/card:scale-110 transition-transform">bathtub</span>
                    <span className="font-headline font-black text-xl xl:text-2xl text-[#0a1235] text-center leading-tight">{project.bathrooms || '---'}</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-2 text-center">{lang === 'es' ? 'Baños' : 'Bathrooms'}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/card hover:-translate-y-1 duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2 group-hover/card:scale-110 transition-transform">garage</span>
                    <span className="font-headline font-black text-lg xl:text-xl text-[#0a1235] text-center leading-tight">{project.garage || '---'}</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-2 text-center">{lang === 'es' ? 'Garaje' : 'Garage'}</span>
                  </div>
                  {project.floors && (
                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/card hover:-translate-y-1 duration-300">
                      <span className="material-symbols-outlined text-primary text-3xl mb-2 group-hover/card:scale-110 transition-transform">layers</span>
                      <span className="font-headline font-black text-xl xl:text-2xl text-[#0a1235] text-center leading-tight">{project.floors}</span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-2 text-center">{lang === 'es' ? 'Plantas' : 'Floors'}</span>
                    </div>
                  )}
                  {project.propertyType && (
                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/card hover:-translate-y-1 duration-300">
                      <span className="material-symbols-outlined text-primary text-3xl mb-2 group-hover/card:scale-110 transition-transform">home</span>
                      <span className="font-headline font-black text-lg xl:text-xl text-[#0a1235] text-center leading-tight">{project.propertyType}</span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-2 text-center">{lang === 'es' ? 'Tipo' : 'Type'}</span>
                    </div>
                  )}
               </div>
            </div>
            <h3 className="text-3xl font-headline font-black text-primary mb-4">
              {lang === 'es' ? 'Especificaciones' : 'Specifications'}
            </h3>
            <p className="text-lg text-on-surface-variant font-light">
              {project.isRental 
                ? (lang === 'es' ? 'Disfruta de acceso privado y una auténtica experiencia de vida costera.' : 'Enjoy private access and an authentic coastal living experience.')
                : (lang === 'es' ? `Terreno de ${project.lotSize}. Construcción con los más altos estándares de calidad.` : `Lot size of ${project.lotSize}. Construction with the highest quality standards.`)}
            </p>
          </div>
          {/* Feature 3 - Map */}
          <div className="text-center group flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-8 relative bg-slate-100">
               {project.mapUrl ? (
                 <iframe 
                   src={project.mapUrl} 
                   className="absolute inset-0 w-full h-full" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Project Map"
                 ></iframe>
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-6xl">map</span>
                 </div>
               )}
            </div>
            <h3 className="text-3xl font-headline font-black text-primary mb-4">
              {project.isRental 
                ? (lang === 'es' ? 'Tu Escapada Perfecta' : 'Your Perfect Getaway') 
                : (lang === 'es' ? 'Inversión Inteligente' : 'Smart Investment')}
            </h3>
            <p className="text-lg text-on-surface-variant font-light">
              {project.isRental 
                ? (lang === 'es' ? 'Descubre esta increíble propiedad y disfruta de unas vacaciones inolvidables.' : 'Discover this amazing property and enjoy an unforgettable vacation.')
                : (lang === 'es' ? 'Adquiere tu propiedad en una de las áreas de crecimiento más rápido en Florida.' : 'Acquire property in one of the fastest growing areas in Florida.')}
            </p>
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHTS & SPECS */}
      {project.features && project.features.length > 0 && (
        <section className="bg-slate-50 border-t border-b border-slate-200 py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col justify-center">
               <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary mb-8 leading-tight">
                 {lang === 'es' ? 'Características Destacadas' : 'Key Features'}
               </h2>
               <div className="space-y-4 mb-10 w-full">
                  {project.features.map((feature: ProjectFeature, idx: number) => (
                    <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-[14px] bg-slate-50 group-hover:bg-primary/5 text-primary flex items-center justify-center transition-colors shadow-inner border border-slate-100">
                        <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                      </div>
                      <div className="flex flex-col pt-1">
                        <h4 className="text-xl font-headline font-black text-[#0a1235] mb-2 tracking-tight">
                          {feature.title}
                        </h4>
                        {feature.desc && (
                          <p className="text-base text-slate-500 leading-relaxed font-light">
                            {feature.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
               </div>
               {project.floorplanUrl && (
                 <a href={project.floorplanUrl} target="_blank" rel="noopener noreferrer" className="self-start px-8 py-4 bg-[#0a1235] text-white rounded-xl font-headline font-bold uppercase tracking-wider hover:bg-primary transition-colors inline-block text-center">
                   {lang === 'es' ? 'Ver plano completo' : 'View full floorplan'}
                 </a>
               )}
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
               <img src={project.image} className="absolute inset-0 w-full h-full object-cover" alt="Property Highlight" />
            </div>
          </div>
        </section>
      )}

      {/* 5. GALLERY */}
      {galleryItems.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary mb-12">
              {lang === 'es' ? 'Visualiza el Avance' : 'Visualize the Progress'}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-12">
              <button 
                onClick={() => setActiveFilter('todos')}
                className={`px-6 py-2 rounded-full font-headline font-bold transition-colors ${activeFilter === 'todos' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >Todos</button>
              <button 
                onClick={() => setActiveFilter('exterior')}
                className={`px-6 py-2 rounded-full font-headline font-bold transition-colors ${activeFilter === 'exterior' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >Exterior</button>
              <button 
                onClick={() => setActiveFilter('interior')}
                className={`px-6 py-2 rounded-full font-headline font-bold transition-colors ${activeFilter === 'interior' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >Interior</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {filteredGallery.map((item: { id: number; src: string }, index: number) => (
                  <div 
                    key={item.id} 
                    className="aspect-square rounded-2xl overflow-hidden group cursor-pointer animate-in fade-in"
                    onClick={() => openLightbox(index)}
                  >
                    <img src={item.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={`Gallery ${item.id}`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                       <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">zoom_in</span>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. PRE-FOOTER CTA */}
      <section className="bg-primary text-white py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center items-start">
             <h2 className="text-4xl lg:text-5xl font-headline font-black mb-8 leading-tight">
               {lang === 'es' ? '¿Estás Listo para Dar el Siguiente Paso?' : 'Are you ready to take the next step?'}
             </h2>
             <p className="text-xl opacity-90 mb-10 font-light max-w-lg">
               {lang === 'es' ? 'No dejes pasar la oportunidad de hacer de esta casa tu nuevo hogar. Completa el formulario de contacto o llámanos.' : 'Don\'t miss the opportunity to make this house your new home.'}
             </p>
             <button className="bg-white text-primary px-10 py-5 rounded-xl font-headline font-extrabold text-lg shadow-xl hover:scale-105 transition-transform">
               {lang === 'es' ? 'Llámanos Directamente' : 'Call Us Directly'}
             </button>
          </div>
          <div className="hidden lg:block relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
             <img src={siteData.about.image} className="absolute inset-0 w-full h-full object-cover relative z-10" alt="Lifestyle" />
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && filteredGallery[selectedIndex] && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button 
            className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-4xl md:text-5xl">close</span>
          </button>

          {/* Counter */}
          <div className="absolute top-7 left-6 text-white/60 text-sm md:text-base font-medium select-none">
            {selectedIndex + 1} / {filteredGallery.length}
          </div>

          {/* Previous */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl">chevron_left</span>
          </button>

          {/* Image */}
          <img 
            src={filteredGallery[selectedIndex].src} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none" 
            alt={`Gallery ${filteredGallery[selectedIndex].id}`}
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl">chevron_right</span>
          </button>
        </div>
      )}

    </div>
  );
};
