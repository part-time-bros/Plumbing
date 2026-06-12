import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const pages = { Home, Services, About, Contact };

export default function App() {
  const [page, setPage] = useState('Home');

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Page = pages[page] || Home;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav page={page} go={go} />
      <main id="main-content">
        <Page go={go} />
      </main>
      <Footer go={go} />
    </>
  );
}
