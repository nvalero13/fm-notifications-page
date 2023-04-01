import styles from "./App.module.css";
import useNotifications from "./hooks/useNotifications";

import Notification from "./components/Notification";

function App() {
  const [notis, markAllAsRead] = useNotifications();

  return (
    <main className="App">
      <header>
        <div className={styles.flex}>
          <h1>Notifications</h1>
          <span className={styles["notifications-num"]}>
            {notis.filter((noti) => noti.unread).length}
          </span>
        </div>
        <button
          onClick={() => markAllAsRead()}
          className={styles["mark-all-button"]}
        >
          Mark all as read
        </button>
      </header>
      <section>
        {notis.map((notification, index) => {
          return <Notification key={index} notification={notification} />;
        })}
      </section>
    </main>
  );
}

export default App;
