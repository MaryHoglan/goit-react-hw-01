import styles from './Profile.module.css';


export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.profile}>
            <div>
                <img className={styles.avatar} src={image} alt={name} />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
           <li className={styles.items}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
           </li>
           <li className={styles.items}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
           </li>
           <li className={styles.items}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
           </li>
         </ul>
    </div>
   );
}

