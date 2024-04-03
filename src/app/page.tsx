import Image from "next/image";

import { MARKET_NAMES } from './data.js';

import Items from './components/Items.jsx';
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


      <div className='welcomescreen'>

        <Items 
          title={MARKET_NAMES[0].title}
          description={MARKET_NAMES[0].description}
          cost={MARKET_NAMES[0].cost}
        />
        <Items {...MARKET_NAMES[1]}/>  
        <Items {...MARKET_NAMES[2]}/>
        <Items {...MARKET_NAMES[3]}/>

      </div>
      
      <menu className="productscreen">
        <TabButton>OUR PRODUCTS</TabButton>
        <TabButton>PRICING</TabButton>
        <TabButton>DESIGN</TabButton>

      </menu>

      <div className="galleryscreen">
        <p>GALLERY</p>
      </div>
      <div className="contactscreen">
        <p>Contact us</p>
      </div>


    </main>
  );
}
