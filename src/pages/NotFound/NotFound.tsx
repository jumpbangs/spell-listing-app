import { Link } from 'react-router-dom';
import error from 'assets/images/error-404.png';

import { ROUTE_HOME } from '../../routes/routes';

const NotFound = () => {
  return (
    <div className="center-content">
      <div className="center-align-content">
        <img src={error} alt="Error Image" />
        <h2 style={{ color: 'whitesmoke' }}>Sorry, the page you have been looking for is not available.</h2>
        <Link to={ROUTE_HOME}>Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
