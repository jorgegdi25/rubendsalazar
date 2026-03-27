import { useLanguage } from '../context/LanguageContext';

export const ModularSteel = () => {
  const { t: siteData } = useLanguage();

  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden bg-primary" id="awards">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091747]/90 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/3 text-center">
            <div className="rounded-3xl flex flex-col items-center justify-center p-8 bg-transparent">
              <img src={siteData.modularSteel.image} alt="Builder Award" className="h-64 w-auto object-contain mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              <p className="font-headline font-bold text-lg text-white text-center opacity-90 max-w-[240px] leading-snug">
                {siteData.modularSteel.awardTitle}
              </p>
            </div>
          </div>
          <div className="lg:w-2/3 text-white">
            <div className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white font-headline font-bold text-xs uppercase tracking-[0.2em] mb-8">
              {siteData.modularSteel.tagline}
            </div>
            <h2 className="font-headline font-black text-4xl lg:text-5xl tracking-tighter mb-8 leading-tight">
              {siteData.modularSteel.title}
            </h2>
            <p className="text-[#dee1ff] text-xl mb-4 font-light opacity-90 leading-relaxed max-w-3xl">
              {siteData.modularSteel.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
