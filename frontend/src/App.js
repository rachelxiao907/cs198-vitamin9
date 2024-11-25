import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch(''); //i couldn't deploy my app without paying
    const data = await response.json();
    setQuote(data.quote);
  };

  return (
    <div className="App">
        <center>
            <h1 style={{ fontSize: '50px' }}>Quote of the Day</h1>
            <button style={{ padding: '20px', fontSize: '25px' }} onClick={getQuote}>Get Quote</button>
            <p style={{ fontSize: '25px' }}>You miss all the shots you don't take</p>
        </center>
    </div>
  );
}

export default App;
