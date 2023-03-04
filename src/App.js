import React from 'react';
import { Container } from '@mui/material';

import './App.css';
import NavBar from './components/NavBar';
import ErrorBoundary from './components/errors/ErrorBoundary';
import SpellListPage from './pages/SpellListPage/SpellListPage';

const App = () => {
  return (
    <ErrorBoundary>
      <NavBar />
      <Container fixed>
        <SpellListPage />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
