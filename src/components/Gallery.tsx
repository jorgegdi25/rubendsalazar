import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Gallery = () => {
  const { t: siteData, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % siteData.gallery.length : null
    );
  }, [siteData.gallery.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + siteData.gallery.length) % siteData.gallery.length
        : null
    );
  }, [siteData.gallery.length]);

  // Keyboard navigation
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
              onClick={() => openLightbox(index)}
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

      {/* Lightbox with navigation */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-4xl md:text-5xl">close</span>
          </button>

          {/* Counter */}
          <div className="absolute top-7 left-6 text-white/60 text-sm md:text-base font-medium select-none">
            {selectedIndex + 1} / {siteData.gallery.length}
          </div>

          {/* Previous button */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl">chevron_left</span>
          </button>

          {/* Image */}
          <img 
            src={siteData.gallery[selectedIndex]} 
            alt={`Work ${selectedIndex + 1}`} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl">chevron_right</span>
          </button>
        </div>
      )}
    </section>
  );
};
