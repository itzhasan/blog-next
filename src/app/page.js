"use client";
import styles from "./page.module.css";
import Container from "./components/container/container";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

import Card from "./components/card/card"
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

export default function Home() {
  const [list ,setList] = useState([]);
  const [loading , setLoading] =useState(false);
  const getBlogs =() =>{
    setLoading(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts").then(res=>res.json()).then((data)=>{
    setList(data.blogs)
    setLoading(false)
  })
  };

  useEffect(
    ()=>{
      getBlogs()

},[]);
  
  
  return (
    <main className={styles.home}>
      <Header />
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
      <Container>
        {loading &&  <div className={styles.loadercontainer}><div class={styles.loader}></div></div> }
        <div className={styles.grid}>
          {
            list.map((el,i)=>(
              <Card key={i} blog = {el}/>
            ))
          }
        </div>
      </Container>
      <Footer/>
      
    </main>
  );
}
