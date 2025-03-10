// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Indicators from './pages/Indicators';
import Liquidity from './pages/Liquidity';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/news" element={
          <ProtectedRoute>
            <MainLayout>
              <News />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/indicators" element={
          <ProtectedRoute>
            <MainLayout>
              <Indicators />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/liquidity" element={
          <ProtectedRoute>
            <MainLayout>
              <Liquidity />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;