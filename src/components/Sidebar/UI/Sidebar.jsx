import CategoryIcon from "./icons/Category.svg";
import MessageIcon from "./icons/Message.svg";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <p className={styles.title}>Главное меню</p>
      <ul>
        <li className={styles.listItem}>
          <img src={CategoryIcon} alt="" />
          <p>Панель управления</p>
        </li>
        <li className={styles.listItem}>
          <img src={MessageIcon} alt="" />
          <p>Telegram</p>
        </li>
      </ul>
    </div>
  );
};
