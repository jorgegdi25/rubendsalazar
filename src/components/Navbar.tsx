import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { t: siteData, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

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
      <div className="flex justify-between items-center px-4 md:px-6 lg:px-12 py-3 lg:py-4 h-auto max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img alt="Ruben D. Salazar Inc. Logo" className="h-10 md:h-16 lg:h-24 w-auto cursor-pointer" src={siteData.logoUrl} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-10">
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
        <div className="flex items-center gap-2 md:gap-6">
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
            className="hidden sm:inline-flex blue-gradient-btn text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl font-headline font-bold text-xs lg:text-sm tracking-widest uppercase shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
          >
            {siteData.ui.getQuote}
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-primary"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[70px] md:top-[90px] lg:hidden bg-white z-40 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="flex flex-col p-8 space-y-8">
            {siteData.navLinks.map((link) => (
              <a 
                key={link.id}
                className="text-2xl font-headline font-black text-primary border-b border-slate-50 pb-4" 
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 flex flex-col gap-6">
              <button 
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en');
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-4 text-xl font-headline font-bold text-primary"
              >
                <span className="material-symbols-outlined">language</span>
                {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'} ({language.toUpperCase()})
              </button>
              <Link 
                to="/"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  setIsMenuOpen(false);
                }}
                className="blue-gradient-btn text-white px-8 py-5 rounded-2xl font-headline font-black text-center text-lg uppercase tracking-widest shadow-2xl"
              >
                {siteData.ui.getQuote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
