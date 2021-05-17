import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './components/Question';
import './App.scss';

const App = () => {

  const [questions, setQuestions] = useState(data);

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
    </main>
  );
}

export default App;
