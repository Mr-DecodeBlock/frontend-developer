// @Views
import { Footer, Header } from "../views";

// @Styles
import styles from "./styles.module.css";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.maxWidth}>{children}</div>
      </main>

      <Footer />
    </>
  );
}
