import React from 'react';
import { Container } from '@mui/material';

import './App.css';
import NavBar from 'components/NavBar';
import Navigation from 'common/Navigation';
import ErrorBoundary from 'components/errors/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <NavBar />
      <Container fixed>
        <Navigation />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
