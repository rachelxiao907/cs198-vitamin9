import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch('https://your-flask-backend-url/quote');
    const data = await response.json();
    setQuote(data.quote);
  };

  return (
    <div className="App">
        <center>
            <h1 style={{ fontSize: '50px' }}>Quote of the Day</h1>
            <button style={{ padding: '20px', fontSize: '25px' }} onClick={getQuote}>Get Quote</button>
            <p style={{ fontSize: '25px' }}>{quote}</p>
        </center>
    </div>
  );
}

export default App;
