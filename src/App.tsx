import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 👈 import this

// Import Page Components
import Home from '../src/pages/Home';
import AboutPage from '../src/pages/About';
import MenuPage from '../src/pages/Menu';
import GalleryPage from '../src/pages/Gallery';
import ContactPage from '../src/pages/Contact';

/**
 * The main application component.
 * It sets up the router and defines the structure of the multi-page site.
 * The Navbar and Footer are present on all pages.
 */
function App() {
  return (
    <div className="bg-[#0a192f] text-gray-300 font-sans">
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 Add this line to scroll to top on route change */}
        <Navbar />
        {/* The main content area will be padded to avoid being hidden by the fixed navbar */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
