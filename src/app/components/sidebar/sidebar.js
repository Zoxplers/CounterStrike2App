import LogoHeader from "../logoheader/logoheader";
import Navmenu from "../navmenu/navmenu";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div id={styles.sidebar}>
        <LogoHeader/>
        <Navmenu/>
    </div>
  );
}