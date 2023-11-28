import Container from "../components/container/container";
import Header from "../components/header/Header";
import Image from "next/image";
export default function Home() {
    let id="about";
  return (
    <div>
      <Header id={id} />
      <Container>
        <br/>
        <h1>Welcome</h1>
        <p>This is my first challenge with Html&CSS.</p>
        <center>
        <Image src="./relax.svg" height={800} width={800} style={{margin: "auto auto"}}/>
        <br/>
        <br/>
        <p>created by Aon 2023</p>
        </center>
        <br/>
      </Container>
    </div>
  );
}
