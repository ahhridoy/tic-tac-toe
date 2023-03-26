import Board from "@/containers/Board";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Board />
    </main>
  );
}
