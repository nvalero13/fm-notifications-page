import styles from "./App.module.css";

function App() {
  return (
    <main className="App">
      <header>
        <div className={styles.flex}>
          <h1>Notifiactions</h1>
          <span className={styles.notificationsNum}>3</span>
        </div>
        <p>Mark all as read</p>
      </header>
    </main>
  );
}

export default App;
