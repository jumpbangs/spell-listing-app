import { ToastContainer } from 'react-toastify';

import ErrorBoundary from 'components/Errors/ErrorBoundary';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

const App = () => {
  return (
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
  );
};

export default App;
