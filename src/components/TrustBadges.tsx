import { useLanguage } from '../context/LanguageContext';

export const TrustBadges = () => {
  const { t: siteData } = useLanguage();

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {siteData.trustBadges.map((badge, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="w-24 h-24 bg-white shadow-lg rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-5xl group-hover:text-white transition-colors">
                  {badge.icon}
                </span>
              </div>
              <p className="font-headline font-black text-xl text-on-surface">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
