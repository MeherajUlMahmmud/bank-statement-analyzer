import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
