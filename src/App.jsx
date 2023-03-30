import { useState } from "react";
import styles from "./App.module.css";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Hi!</h1>
        <div className={styles.notificationsNum}>3</div>
      </header>
    </main>
  );
}

export default App;
