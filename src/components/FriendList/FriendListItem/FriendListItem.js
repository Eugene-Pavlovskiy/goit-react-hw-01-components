import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`img of ${name}`}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;