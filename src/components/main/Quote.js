
import { useState, useEffect } from 'react';

export default function Quote(){

  
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = `V8ZqhJn92Lr1Ii7jRPS67g==tXzsOeHZa4GHL56Z`;

        const category = 'success';
        
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, { headers: { 'X-API-Key': `${apiKey}` } }); 
        const data = await res.json();
        setQuotes(data);
      } catch(e) {
        console.error(e);
      }
    }
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