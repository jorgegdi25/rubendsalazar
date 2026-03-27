import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t: siteData } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src={siteData.contactSection.bgImage} 
          alt="Contact Background" 
        />
        <div className="absolute inset-0 bg-primary/95"></div>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-white">
            <h2 className="font-headline font-black text-6xl lg:text-7xl tracking-tighter mb-10 leading-none">
              {siteData.contactSection.title}
            </h2>
            <p className="text-primary-fixed text-2xl font-light mb-12 opacity-80 leading-relaxed">
              {siteData.contactSection.description}
            </p>
            <div className="space-y-10">
              <div className="flex items-center gap-8">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl">pin_drop</span>
                <div>
                  <p className="font-headline font-black text-xl uppercase tracking-widest text-white">{siteData.ui.mainHq}</p>
                  <p className="text-primary-fixed text-lg opacity-80">{siteData.contact.hq}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl">call</span>
                <div>
                  <p className="font-headline font-black text-xl uppercase tracking-widest text-white">{siteData.ui.directLine}</p>
                  <p className="text-primary-fixed text-lg opacity-80">{siteData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl">mail</span>
                <div>
                  <p className="font-headline font-black text-xl uppercase tracking-widest text-white">{siteData.ui.inquiries}</p>
                  <p className="text-primary-fixed text-lg opacity-80">{siteData.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl">
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-sm font-headline font-black text-on-surface uppercase tracking-widest mb-3">{siteData.ui.contactForm.fullName}</label>
                <input className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary px-4 py-4 transition-colors rounded-t-lg" placeholder={siteData.ui.contactForm.fullNamePlaceholder} type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-headline font-black text-on-surface uppercase tracking-widest mb-3">{siteData.ui.contactForm.phone}</label>
                  <input className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary px-4 py-4 transition-colors rounded-t-lg" placeholder={siteData.ui.contactForm.phonePlaceholder} type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-headline font-black text-on-surface uppercase tracking-widest mb-3">{siteData.ui.contactForm.email}</label>
                  <input className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary px-4 py-4 transition-colors rounded-t-lg" placeholder={siteData.ui.contactForm.emailPlaceholder} type="email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-headline font-black text-on-surface uppercase tracking-widest mb-3">{siteData.ui.contactForm.message}</label>
                <textarea className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary px-4 py-4 transition-colors resize-none rounded-t-lg" placeholder={siteData.ui.contactForm.messagePlaceholder} rows={4}></textarea>
              </div>
              <button className="w-full blue-gradient-btn text-on-primary py-6 rounded-2xl font-headline font-black text-xl uppercase tracking-widest shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1">
                {siteData.ui.contactForm.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
