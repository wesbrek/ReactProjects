import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Quote from './components/Quote';

function App() {

  const [quotes, saveQuotes] = useState([]);

  const createQuotes = quote =>{
      saveQuotes([
        ...quotes,
        quote
      ])
  }

  const deleteQuote = id => {
    const newQuotes = quotes.filter(quote => quote.id !== id)
    saveQuotes(newQuotes);
  };
  
  const titulo = quotes.length === 0 ? "You've no quotes" : 'Quote manangment'

  return (
    <Fragment>
      <h1>Patient Administration</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
             createQuotes={createQuotes}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {quotes.map(quote =>(
              <Quote
                key = {quote.id}
                quote={quote}
                deleteQuote={deleteQuote}
              />
            ))}
          </div>
        </div>

      </div>
    </Fragment>
   
  );
}

export default App;
