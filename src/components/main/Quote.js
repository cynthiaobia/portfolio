
import {useState, useEffect } from 'react';

export default function Quote(){

  
  const [quote, setQuote] = useState(null);

  // const url = `https://api.api-ninjas.com/v1/quotes?category=success`;
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const apiKey = `V8ZqhJn92Lr1Ii7jRPS67g==tXzsOeHZa4GHL56Z`;

      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=success`, { headers: { 'X-API-Key': `${apiKey}` } }); 
      const data = await res.json();
      setQuote(data);
      console.log(data)
    } catch(e) {
      console.error(e);
    }
  };

  
    fetchData();
  }, []);



  return (
    <div>
      <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</h1>
      <h3><i>- Excepteur Sint</i></h3>

    </div>
  )
}