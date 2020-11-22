import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          <p>ello from App.js and my name is {name}
          and my age is {age - 12}</p> <br />
          <Hello fname={name}></Hello>
         </div>
         
}

export default App;
