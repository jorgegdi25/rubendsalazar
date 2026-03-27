import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Gallery = () => {
  const { t: siteData, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const title = language === 'es' ? 'Galería de Proyectos' : 'Project Gallery';

  return (
    <section className="bg-surface py-24" id="gallery">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-headline font-black text-5xl lg:text-7xl tracking-tighter mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {siteData.gallery.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image} 
                alt={`Work ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-2"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-5xl">close</span>
          </button>
          
          <img 
            src={selectedImage} 
            alt="Work Gallery Large" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
