import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    // Now you can use navigate like this:
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
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <h1>Welcome to Epoxy Elite</h1>
      <p>Your premier destination for epoxy products and services.</p>
      <button onClick={product}>Explore Products</button>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default Home;
