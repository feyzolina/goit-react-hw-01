import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.username}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>

      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Views</span>
          <span className={styles.statValue}>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Likes</span>
          <span className={styles.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
