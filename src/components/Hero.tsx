import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t: siteData } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!siteData.hero.sliderImages || siteData.hero.sliderImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % siteData.hero.sliderImages!.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [siteData.hero.sliderImages]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 md:px-12 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#060c23]">
        {siteData.hero.sliderImages?.map((img, index) => (
          <img 
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} 
            src={img} 
            alt={`Hero Background ${index + 1}`} 
          />
        ))}
        {(!siteData.hero.sliderImages || siteData.hero.sliderImages.length === 0) && (
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src={siteData.hero.bgImage} 
            alt="Hero Background" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/90"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto w-full text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-white font-headline font-black text-6xl md:text-8xl leading-[1] tracking-tighter mb-4 text-shadow-lg"
            dangerouslySetInnerHTML={{ __html: siteData.hero.title as string }}
          />
          <p className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-headline font-bold text-sm tracking-widest uppercase mb-8">
            {siteData.hero.subtitle}
          </p>
          <p className="text-white font-body text-xl md:text-2xl mb-12 opacity-95 tracking-wide">
            {siteData.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="blue-gradient-btn text-on-primary px-10 py-5 rounded-xl font-headline font-extrabold text-lg tracking-wider shadow-2xl hover:scale-105 transition-transform">
              {siteData.ui.requestConsultation}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
