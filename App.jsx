import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Slide from './Components/Slide/Slide';
import Videos from './Components/Videos/Videos';
import Burtgel from './Components/Burtgel/Burtgel';
import Contact from './Components/Contact/Contact'
import Teachers from './Components/Teachers/Teachers';
import Price from './Components/Price/Price';

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Slide/>
      <Videos/>
      <Teachers/>
      <Price/>
      <Burtgel/>
      <Contact/>
    </div>
  )
}

export default App
