import styles from "./App.module.css";

import Notification from "./components/Notification";

const notifications = [
  {
    id: 0,
    user: {
      avatar: "markImg",
      nickname: "Mark Webber",
    },
    time: "3m ago",
    message: "reacted to your recent post",
    link: "My first tournament today!",
    seen: false,
  },
  {
    id: 1,
    user: {
      avatar: "angelaImg",
      nickname: "Angela Gray",
    },
    time: "5m ago",
    message: "followed you",
    seen: true,
  },
];

function App() {
  return (
    <main className="App">
      <header>
        <div className={styles.flex}>
          <h1>Notifications</h1>
          <span className={styles["notifications-num"]}>
            {notifications.filter((noti) => noti.seen === false).length}
          </span>
        </div>
        <button className={styles["mark-all-button"]}>Mark all as read</button>
      </header>
      <section>
        {notifications.map((notification, index) => {
          return <Notification key={index} notification={notification} />;
        })}
      </section>
    </main>
  );
}

export default App;
