import React from "react";
import styles from "./Header.module.css";
import Container from "../container/container";
import Link from "next/link";

function Header({ id }) {
  let colorH = "black"; 
  let colorA = "black";

  if (id === "home") {
    colorH = "blue";
  }

  if (id === "about") {
    colorA = "blue";
  }
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <h1>Aon blog</h1>
          </div>
          <div>
            <ul className={styles.content}>
              <li>
                <Link href="/">
                  <span style={{ color: colorA }}>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span style={{ color: colorA }}>About</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span style={{ color: colorA }}>Help</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
