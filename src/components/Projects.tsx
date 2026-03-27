import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Projects = () => {
  const { t: siteData } = useLanguage();

  return (
    <section className="bg-white py-24" id="projects">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-headline font-black text-5xl lg:text-7xl tracking-tighter mb-4">
            {siteData.projects.title}
          </h2>
          <p className="text-on-surface-variant text-xl font-light mx-auto max-w-2xl">
            {siteData.projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px] md:auto-rows-[350px]">
          {siteData.projects.items.map((project, index) => {
            // Bento logic: 1st is large, 2nd & 3rd are smaller
            const isLarge = index === 0;
            const gridClass = isLarge 
              ? "lg:col-span-8 lg:row-span-2" 
              : "lg:col-span-4 lg:row-span-1";

            return (
              <div 
                key={project.id} 
                className={`relative overflow-hidden group rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 ${gridClass}`}
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-headline font-bold text-xs tracking-[0.3em] uppercase mb-2 block opacity-80">
                      {project.location}
                    </span>
                    <h3 className={`${isLarge ? 'text-3xl lg:text-5xl' : 'text-xl lg:text-2xl'} font-headline font-black tracking-tighter mb-4`}>
                      {project.title}
                    </h3>
                    <p className={`hidden md:block text-lg font-light opacity-90 max-w-xl group-hover:opacity-100 transition-opacity mb-6 ${isLarge ? '' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>
                    <div className="pointer-events-auto">
                      <Link 
                        to={`/project/${project.id}`} 
                        className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-headline font-black text-sm hover:bg-[#dee1ff] transition-all transform hover:-translate-y-1"
                      >
                        {siteData.ui.viewDetails}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
