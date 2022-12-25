import PropTypes from 'prop-types';
import {List, Item, Online, FriendAvatar, NameFriend} from './FriendList.styled'

function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <Item>
            <Online isOnline={isOnline}></Online>
            <FriendAvatar src={avatar} alt={`${name}'s avatar`} width="48" />
            <NameFriend>{name}</NameFriend>
        </Item>
    )
    
}

export default function FriendList({friends}) {
    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                ></FriendListItem>
            ))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
} 