import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { ModularSteel } from '../components/ModularSteel';
import { Projects } from '../components/Projects';
import { Gallery } from '../components/Gallery';
import { TrustBadges } from '../components/TrustBadges';
import { Contact } from '../components/Contact';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrollTo state passed from navigation (e.g., from project page navbar)
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Small delay to let the DOM render sections first
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clean up the state so refresh doesn't re-scroll
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <Services />
      <ModularSteel />
      <Projects />
      <Gallery />
      <TrustBadges />
      <Contact />
    </main>
  );
};
