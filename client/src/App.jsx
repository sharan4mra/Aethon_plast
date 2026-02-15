import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurSegments from './pages/OurSegments';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Products from './pages/Products';
import { trackVisitor } from './services/visitorApi';

const VisitorTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackVisitor(location.pathname);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <VisitorTracker />
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/our-segments" element={<OurSegments />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
