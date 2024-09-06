import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './utils/app_routes';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={AppRoutes.homeRoute} element={<HomePage />} />
            <Route path={AppRoutes.signInRoute} element={<LoginPage />} />
            <Route path={AppRoutes.dashboardRoute} element={<DashboardPage />} />
          </Routes>
        </Suspense>
        {/* <Footer /> */}
      </Router>
    </ErrorBoundary>
  );
};

export default App;
