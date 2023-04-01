import styles from "./Notification.module.css";

import angelaImg from "../assets/images/avatar-angela-gray.webp";
import markImg from "../assets/images/avatar-mark-webber.webp";
import jacobImg from "../assets/images/avatar-jacob-thompson.webp";
import rizkyImg from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlyImg from "../assets/images/avatar-kimberly-smith.webp";
import nathanImg from "../assets/images/avatar-nathan-peterson.webp";
import annaImg from "../assets/images/avatar-anna-kim.webp";

import postImg from "../assets/images/image-chess.webp";

function Notification({ notification }) {
  const avatars = [
    markImg,
    angelaImg,
    jacobImg,
    rizkyImg,
    kimberlyImg,
    nathanImg,
    annaImg,
  ];

  return (
    <article className={notification.unread ? styles["unread"] : ""}>
      <img className={styles.avatar} src={avatars[notification.id]} />
      <div>
        <div className={styles["content-title"]}>
          <p className={styles["content-text"]}>
            <span className={styles["nickname"]}>
              {notification.user.nickname}
            </span>
            <span className={styles["normal-text"]}>
              {notification.message}
            </span>
            {notification.post && (
              <span className={styles["post-title"]}> {notification.post}</span>
            )}
            {notification.group && (
              <span className={styles["group-name"]}>
                {" "}
                {notification.group}
              </span>
            )}
          </p>
          {notification.unread && <div className={styles["red-dot"]}></div>}
        </div>
        <p className={styles["content-time"]}>{notification.time}</p>
        {notification.private && (
          <div className={styles["private-message"]}>
            {notification.private}
          </div>
        )}
      </div>
      {notification.img && (
        <img className={styles["post-img"]} alt="Post image" src={postImg} />
      )}
    </article>
  );
}

export default Notification;
