import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t: siteData } = useLanguage();

  return (
    <footer className="bg-white py-24 px-8 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <img alt={`${siteData.companyName} Logo`} className="h-24 w-auto mb-8" src={siteData.logoUrl} />
          <p className="text-slate-500 font-body text-lg leading-relaxed mb-8">
            {siteData.footer.description}
          </p>
          <div className="flex gap-6">
            <a className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline font-black text-primary text-xl uppercase tracking-widest mb-8">{siteData.ui.footer.quickLinks}</h4>
          <ul className="space-y-4 font-headline font-semibold text-lg">
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">{siteData.ui.footer.privacyPolicy}</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">{siteData.ui.footer.termsOfService}</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">{siteData.ui.footer.licensingInfo}</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">{siteData.ui.footer.investorRelations}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-black text-primary text-xl uppercase tracking-widest mb-8">{siteData.ui.footer.newsletter}</h4>
          <p className="text-slate-500 font-body text-lg leading-relaxed mb-8">
            {siteData.ui.footer.newsletterDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input className="flex-grow bg-slate-50 border-0 border-b-2 border-slate-200 px-6 py-4 focus:ring-0 focus:border-primary rounded-t-lg" placeholder={siteData.ui.footer.emailPlaceholder} type="email" />
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-black uppercase tracking-widest text-sm">{siteData.ui.footer.joinBtn}</button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-400 font-body text-sm">© {new Date().getFullYear()} {siteData.companyName} {siteData.ui.footer.copyrightText}</p>
        <div className="flex gap-10">
          <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">{siteData.ui.footer.license1}</span>
          <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">{siteData.ui.footer.license2}</span>
        </div>
      </div>
    </footer>
  );
};
