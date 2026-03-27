import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { t: siteData, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // "Home" link (href === "#") → always go to "/"
    if (href === '#') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    // Anchor links like "#about", "#services", etc.
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);

      if (location.pathname === '/') {
        // Already on Home → just scroll to the section
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // On another page → navigate to Home first, then scroll
        navigate('/', { state: { scrollTo: sectionId } });
      }
      return;
    }

    // Any other href (shouldn't happen, but fallback)
    navigate(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/20 bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 lg:px-12 py-4 h-auto max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img alt="Ruben D. Salazar Inc. Logo" className="h-24 w-auto cursor-pointer" src={siteData.logoUrl} />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {siteData.navLinks.map((link, index) => (
            <a 
              key={link.id}
              className={`${index === 0 ? 'text-[#132778] border-b-2 border-primary' : 'hover:text-primary transition-colors text-[#132778]'} font-headline font-semibold tracking-tight cursor-pointer`} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-primary font-headline font-bold text-sm hover:bg-slate-50 transition-colors"
            title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
          >
            {language.toUpperCase()}
          </button>
          <Link 
            to="/"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="blue-gradient-btn text-on-primary px-8 py-3 rounded-xl font-headline font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
          >
            {siteData.ui.getQuote}
          </Link>
        </div>
      </div>
    </nav>
  );
};
