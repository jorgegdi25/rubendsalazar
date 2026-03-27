import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
  const { t: siteData } = useLanguage();

  return (
    <section className="py-32 bg-slate-50" id="services">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-primary font-headline font-black text-5xl lg:text-6xl tracking-tighter mb-8">{siteData.services.title}</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-on-surface-variant text-xl font-light">{siteData.services.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.items.map(service => (
            <div 
              key={service.id} 
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white"
            >
              {/* Image section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Floating icon badge */}
                <div className="absolute bottom-0 left-8 translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 ring-4 ring-slate-50">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {service.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-8 pt-12">
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">{service.description}</p>
              </div>
              
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
