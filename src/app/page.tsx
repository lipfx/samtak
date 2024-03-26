import Image from "next/image";
import TabButton from './components/TabButton';


export default function Home() {
  return (
    <main>

      <div>
        <menu className="homebar">
          
          <TabButton>SAMTAK</TabButton>
          <TabButton>HOME</TabButton>
          <TabButton>PRODUCTS</TabButton>
          <TabButton>GALLERY</TabButton>
          <TabButton>CONTACT</TabButton>

        </menu>
      </div>

      <div>

      </div>

    </main>
  );
}
