import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__title">Page not found</div>
      <Link to="/"> To main page </Link>
    </div>
  );
}

export default NotFound;