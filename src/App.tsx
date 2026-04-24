import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { CssBaseline, ThemeProvider } from '@mui/material';

import ErrorBoundary from 'components/Errors/ErrorBoundary';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import { RootState } from 'store/store';

import '@fontsource-variable/space-grotesk';

import { darkTheme, lightTheme } from './themes/themes';

const App = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="box main-content">
        <ToastContainer />
        <ErrorBoundary>
          <Header />
          <div style={{ minHeight: 'auto', width: '100%' }}>
            <Navigation />
          </div>
          <Footer />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
};

export default App;
