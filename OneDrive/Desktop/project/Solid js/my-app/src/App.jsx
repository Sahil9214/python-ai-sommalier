import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);
  const handleIncrement = () => {
    setCount(count() + 1);
  };
  return (
    <div class={styles.App}>
      <h1>There is a {count()}</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
}

export default App;
