import Navbar from './component/naviagation/Navigation';
import Card from './component/card';
import { useState, useEffect } from react;
import './App.css';
import { findDOMNode } from 'react-dom';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
      <Card imageUrl={'https://www.istockphoto.com/photos/food-plate'} name={'Test Food'} description= {"hjsjadgucwacuwac"} price = {500}  />
      </header>
    </div>
  );
}

export default App;
