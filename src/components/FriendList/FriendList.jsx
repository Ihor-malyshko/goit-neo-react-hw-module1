import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline'
  const statusClass = isOnline ? styles.statusOnline : styles.statusOffline

  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <p className={statusClass}>{statusText}</p>
    </div>
  )
}

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  )
}

export default FriendList
