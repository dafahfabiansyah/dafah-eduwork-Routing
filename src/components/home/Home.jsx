import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../footer/footer';
import Header from '../../Header/Header';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div class="container">
        <div class="article">
          <h1>Tittle</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorem. Eveniet repellendus consequatur aperiam alias explicabo consequuntur ad ipsa officiis possimus, iure necessitatibus? A voluptates sit ad aliquid ratione
            et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorem. Eveniet repellendus consequatur aperiam alias explicabo consequuntur ad ipsa officiis possimus, iure necessitatibus? A voluptates sit ad aliquid
            ratione et.
          </p>
        </div>
        <div class="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>Ini Sidebar</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
