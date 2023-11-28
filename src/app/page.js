"use client";
import styles from "./page.module.css";
import Container from "./components/container/container";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";


export default function Home() {
  let id = "home";
  return (
    <main className={styles.home}>
      <Header id={id}/>
      <div className={styles.cover}>
        <div className={styles.overlay}>
         
          <Container>
          <div className={styles.title}>
            <h2>Simple Blog</h2>
            <p>A Blog created by Aon 2023</p>
          </div>
        </Container>
        </div>
      </div>
      
    </main>
  );
}
