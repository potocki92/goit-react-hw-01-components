import {
  Avatar,
  Description,
  List,
  Name,
  ProfileStyled,
  Stats,
} from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyled>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <List>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </List>
        <List middle>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </List>
        <List>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </List>
      </Stats>
    </ProfileStyled>
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
