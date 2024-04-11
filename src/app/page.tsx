import Image from "next/image";

import { useState } from 'react';

import { MARKET_NAMES } from './data.js';

import Items from './components/Items.jsx';
import TabButton from './components/TabButton';


export default function Home() {

  const [ selectedTopic, setSelectedTopic ] = useState('Click');

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
  }

  return (
    <main>

      <div>
        <menu className="homebar">
          
          <h1 className="logotextsize">SAMTAK</h1>
          <TabButton onSelect={() => handleSelect('home')}>HOME</TabButton>
          <TabButton onSelect={() => handleSelect('products')}>PRODUCTS</TabButton>
          <TabButton onSelect={() => handleSelect('gallery')}>GALLERY</TabButton>
          <TabButton onSelect={() => handleSelect('contact')}>CONTACT</TabButton>

        </menu>
       
      </div>


      <div className='welcomescreen'>

        <Items 
          title={MARKET_NAMES[0].title}
          description={MARKET_NAMES[0].description}
          detail={MARKET_NAMES[0].detail}
          cost={MARKET_NAMES[0].cost}
          available={MARKET_NAMES[0].available}

        />
        <Items {...MARKET_NAMES[1]}/>  
        <Items {...MARKET_NAMES[2]}/>
        <Items {...MARKET_NAMES[3]}/>

      </div>
      
      <menu className="productscreen">
        {/* <TabButton>OUR PRODUCTS</TabButton>
        <TabButton>PRICING</TabButton>
        <TabButton>DESIGN</TabButton> */}

      </menu>

      <div className="galleryscreen">
        <p>GALLERY</p>
        <p>test</p>
        {/* <TabButton>CLICK TO SHOW</TabButton> */}

      </div>
      <div className="contactscreen">
        <p >Contact us: samtak@gmail.com</p>
        <p >phone:</p>
      </div>


    </main>
  );
}
