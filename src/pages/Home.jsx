import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'; // Import your CSS file


function Home() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous route
  };
  const getQuote = () => {
    navigate('/get-quote');
  };
  const product = () => {
    navigate('/services')
  }

  return (
    <div className="home-page" >
      <div className='header'>
        <br />
        <br />
        <br />
        <br />
        <br />
      <h1 className='title'>WELCOME TO EPOXY ELITE</h1>
      <p>Your premier destination for epoxy products and services</p>
      </div>
     
      <button className="button1" onClick={product}>EXPLORE PRODUCTS</button>
      <button className="button2" onClick={getQuote}>GET PRICING</button>
      </div>
   
  );
}

export default Home;