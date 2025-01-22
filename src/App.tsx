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
        <Navigation />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
