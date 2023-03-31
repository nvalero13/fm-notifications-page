import styles from "./Notification.module.css";

import angelaImg from "../assets/images/avatar-angela-gray.webp";
import markImg from "../assets/images/avatar-mark-webber.webp";

function Notification({ notification }) {
  const avatars = [markImg, angelaImg];

  return (
    <article>
      <img className={styles.avatar} src={avatars[notification.id]} />
      <div>
        <div className={styles["content-title"]}>
          <p className={styles["content-text"]}>
            {" "}
            <span className={styles["strong"]}>
              {notification.user.nickname}
            </span>
            <span className={styles["normal-text"]}>
              {notification.message}
            </span>
            <span className={styles["strong"]}> {notification.link}</span>
          </p>
          {!notification.seen && <div className={styles["red-dot"]}></div>}
        </div>
        <p className={styles["content-time"]}>{notification.time}</p>
      </div>
    </article>
  );
}

export default Notification;
