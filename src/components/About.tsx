import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t: siteData } = useLanguage();

  return (
    <section className="relative py-32 bg-surface overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000" 
                src={siteData.about.image} 
                alt="Construction" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-right-12 glass-card p-6 lg:p-10 rounded-2xl shadow-2xl max-w-[160px] lg:max-w-sm bg-white/10 backdrop-blur-3xl border border-white/10">
              <p className="text-primary font-headline font-black text-4xl lg:text-6xl mb-2">{siteData.about.yearsExperience}</p>
              <p className="text-on-surface font-headline font-bold text-sm lg:text-lg leading-snug">
                {siteData.about.yearsText}
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-headline font-bold text-xs uppercase tracking-[0.2em]">
              {siteData.about.tagline}
            </div>
            <h2 className="text-primary font-headline font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.1]">
              {siteData.about.title}
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed font-light whitespace-pre-line">
              {siteData.about.description}
            </p>
            <div className="grid gap-8">
              {siteData.about.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-3xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-2xl text-on-surface mb-1">{feature.title}</h4>
                    <p className="text-on-surface-variant">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
