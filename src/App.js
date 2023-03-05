import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Navigation from 'common/Navigation';
import ErrorBoundary from 'components/errors/ErrorBoundary';
const App = () => {
  return (
    <div className="box main-content">
      <ToastContainer />
      <ErrorBoundary>
        <NavBar />
        <Navigation />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
