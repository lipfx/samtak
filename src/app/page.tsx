import Image from "next/image";
import TabButton from './components/TabButton';


export default function Home() {
  return (
    <main>

      <div>
        <menu className="homebar">
          
          <h1 className="logotextsize">SAMTAK</h1>
          <TabButton>HOME</TabButton>
          <TabButton>PRODUCTS</TabButton>
          <TabButton>GALLERY</TabButton>
          <TabButton>CONTACT</TabButton>

        </menu>

      </div>


      <div className="welcomescreen">

       <p> SAMTAK is leading web development company in Zagreb </p>
       <p>Focused on complex javascript which our Team makes effortlessly and design that sparks eyes</p>


      </div>

    </main>
  );
}
