import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'; 


export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friendItem}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
