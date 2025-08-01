// src/components/Layout.tsx
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Preloader from './preloader';
import ContactWidget from './contact/contactWidget';
import { PageScroll }from './scrollToTop';

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove in production or tie to real logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <main className="min-h-screen">
            <Outlet />
          </main>
          <ContactWidget />
          <PageScroll />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
