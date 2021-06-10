import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './components/Question';
import './App.scss';

const App = () => {

  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers!!</h3>
        <section className="info">
            {
              questions.map((question) => {
                return <SingleQuestion key={question.key} {...question}/>
              })
            }
        </section>
      </div>
<p>busy in my private repos</p>
    </main>
  );
}

export default App;
