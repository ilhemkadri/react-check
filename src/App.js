import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Name from './name'; 
import Price from './price'; 
import Description from './description'; 
import Image from './img'; t
import './App.css';

const App =() => {
  const firstName = "Alex"; // Provide your name here
  const isNameProvided = firstName.trim() !== "";

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <Image />
            <Name />
            <Price />
            <Description />
          </div>
        </div>
        <div className="mt-3 text-center">
          <h5>{isNameProvided ? `Hello, ${firstName}!` : "Hello, there!"}</h5>
          {isNameProvided && (
            <img 
              src="https://via.placeholder.com/150" 
              alt="Greeting"
              className="mt-2"
              style={{ width: '150px', borderRadius: '50%' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};


export default App;
