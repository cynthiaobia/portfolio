
import { useState, useEffect } from 'react';

export default function Quote(){

  
  const [quotes, setQuotes] = useState([]);
  
  const fetchData = async () => {
    try {
      
      const category = 'success';
      
      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, { headers: { 'X-API-Key': `${process.env.REACT_APP_QUOTE_API_KEY}` } }); 
      const data = await res.json();
      setQuotes(data);
      console.log(quotes)
    } catch(e) {
      console.error(e);
    }
  }
  useEffect(() => {
    
    fetchData();
  }, []);

  return (
    <div className='quote'>
      
      {quotes.map( (quote, index) => 
        <div key={index}>
          <h1>{quote.quote}</h1>
          <h3><i>- {quote.author}</i></h3>
        </div>
      )} 

    </div>
  )
}