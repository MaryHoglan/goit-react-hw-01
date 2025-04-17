import clsx from 'clsx';
import styles from './FriendList.module.css';



const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friendItem}>
          <img className={styles.avatar} src={avatar} alt="User avatar" />
          <p className={styles.name}>{name}</p>
          <p className={clsx(isOnline ? styles.isOnline : styles.isOffline)}>
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;