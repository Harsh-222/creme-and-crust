import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollManager from '@/components/ScrollManager';
import AboutContactPage from '@/pages/AboutContactPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import MenuPage from '@/pages/MenuPage';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
