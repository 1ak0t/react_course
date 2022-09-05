import './profile.scss';
import {Link} from 'react-router-dom';

function Profile() {
  return (
    <div className="profile">
      <img src="img/user.png" alt="User Photo" className="profile__photo"/>
      <h2 className="profile__name">My Name</h2>
      <a href="tel:+7123456789" className="profile__tel">+7123456789</a>
      <Link to="/" className="profile__back">Back</Link>
    </div>
  );
}

export default Profile;