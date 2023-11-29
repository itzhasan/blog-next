import React from "react";
import styles from "./footer.module.css";
import Container from "../container/container";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  let colorH = "black"; 
  let colorA = "black";


  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <h3>All Rights Reserved - Aon2023</h3>
          </div>
          <div>
            <ul className={styles.content}>
              <li>
                <Link href="/">
                  <span style={{ color: colorA }}>
                    <FaFacebookSquare/>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span style={{ color: colorA }}>
                    <BsInstagram/>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span style={{ color: colorA }}>
                    <FaSquareXTwitter/>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
