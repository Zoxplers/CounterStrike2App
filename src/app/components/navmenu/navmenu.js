"use client"

import { useState } from "react";
import styles from "./navmenu.module.css";

let data = [
    { link: "", label: "All"},
    { link: "", label: "Skins"},
    { link: "", label: "Stickers"},
    { link: "", label: "Keychains"},
    { link: "", label: "Collections"},
    { link: "", label: "Crates"},
    { link: "", label: "Keys"},
    { link: "", label: "Collectibles"},
    { link: "", label: "Agents"},
    { link: "", label: "Patches"},
    { link: "", label: "Graffiti"},
    { link: "", label: "Music Kits"}
];

export default function Navmenu() {
    const [active, setActive] = useState("All");
    
    const links = data.map((item) => (
    <a
        className={styles.link}
        // data-active={item.label === active || undefined}
        // href={item.link}
        key={item.label}
        // onClick={(event) => {
        // event.preventDefault();
        // setActive(item.label);
        // }}
    >
        <span>{item.label}</span>
    </a>
    ));
    return (
        <div id={styles.links}>{links}</div>
    );
}