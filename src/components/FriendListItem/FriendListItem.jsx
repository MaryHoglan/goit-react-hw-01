import styles from '../FriendList/FriendList.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="56" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(isOnline ? styles.isOnline : styles.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
}

