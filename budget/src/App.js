import React from 'react';
import Question from './components/Question'

function App() {
  return (
    <div className="container">
      <header>
       <h1>Weekly expense</h1>

       <div className="principal-content content">
         <Question></Question>
       </div>
       
      </header>
    </div>
   
  );
}

export default App;
