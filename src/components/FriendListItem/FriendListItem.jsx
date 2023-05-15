import PropTypes from 'prop-types';
import { Avatar, Item, Status } from './FriendListItem.styled';
import { Name } from 'components/Profile/Profile.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status className={isOnline ? 'online' : ''}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
