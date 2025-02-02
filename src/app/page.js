import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import Details from "./components/details/details";
import styles from  "./page.module.css";

export default function Home() {
  return (
    <div id={styles.page}>
      <Sidebar/>
      <Main/>
      <Details/>
    </div>
  );
}
